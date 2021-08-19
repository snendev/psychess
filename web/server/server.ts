import { Application, Router, Status } from './deps.ts'
import { contentType } from './deps.ts'

import init from './chess/wasm/wasm_chess.js'
import Game from './chess/Game.ts'
import getMoves from './chess/getMoves.ts'

import Store from './Store.ts'

const authToken = Deno.env.get('GITHUB_SECRET')

const port = +(Deno.env.get('PORT') ?? 8080)

const apiRouter = new Router()

function handleSocket(socket: WebSocket) {
  const foundGame = store.find((game) => game.status === 'open')
  const thisSocketId = store.makeId()
  const thisClient = {id: thisSocketId, socket}
  console.log({thisClient, foundGame})

  if (foundGame) {
    // register the player, game client will handle the rest
    foundGame.register(thisClient)
  } else {
    // we have to create a new game client instance
    const newId = store.makeId()
    const game = new Game(
      newId,
      () => { store.remove(newId) }
    )
    game.register(thisClient)
    store.set(game)
    console.log(`${game.id} open!`)
  }
}

apiRouter
  .get('/api/ws', async (context) => {
    if (!context.isUpgradable) throw new Error('Context not upgradable.')
    if (context.request.headers.get('connection') === 'keep-alive, Upgrade') {
      throw new Error('Merged header error.')
    }
    const socket = await context.upgrade()
    handleSocket(socket)
  })
  .post('/api/getMoves', async (context) => {0
    console.log("/api/game/getMoves invoked")
    const json = context.request.body()
    const {pieces, query, turn} = JSON.parse(await json.value)
    const targets = getMoves(pieces, query)
    context.response.headers.set("Content-Type", "application/json") 
    context.response.body = {pieces, query, turn, targets}
  })

const store = new Store<Game>("id")

const app = new Application()

app.addEventListener("error", (event) => {
  console.error(event.error);
})

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.response.body = "Internal server error";
    throw error;
  }
});
app.use((ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*')
  return next()
})

interface GithubTree {
  tree: {
    path: string
    type: string
    url: string
  }[]
}

async function makeRequest(url: URL | string, headers?: Headers): Promise<Response> {
  const urlObj = url instanceof URL ? url : new URL(url)
  return await fetch(urlObj, {
    headers: { ...(headers ?? {}), Authorization: `token ${authToken}` },
  })
}

async function traverseGithubTree(tree: GithubTree, path: string[]): Promise<GithubTree> {
  if (path.length === 0) return tree
  const maybeFile = tree.tree.find((file) => file.path === path[0])
  if (!maybeFile) throw new Error(`Cannot find ${JSON.stringify({path})}`)
  const {url} = maybeFile
  const nextTree = await (await makeRequest(url)).json()
  return await traverseGithubTree(nextTree, path.slice(1))
}

// TODO recurse and grab all the file path names to allow
async function getFileNames(directory: GithubTree, node: string): Promise<string[]> {
  const filenames = await Promise.all(
    directory.tree.map(async ({path, type, url}) => {
      const newPath = `${node}/${path}`
      if (type === 'tree') {
        const data = await (await makeRequest(url)).json()
        return await getFileNames(data, newPath)
      }
      return [newPath]
    })
  )
  return filenames.flatMap((arr) => arr)
}

async function getStaticFileAllowList() {
  const url = `https://api.github.com/repos/sullivansean27/psychess/branches/deploy`
  const deployBranch = await (await makeRequest(url)).json()

  const treeUrl = deployBranch.commit.commit.tree.url
  const treeFiles = await (await makeRequest(treeUrl)).json()
  const staticDirectory = await traverseGithubTree(treeFiles, ['web', 'server', 'public'])
  return await getFileNames(staticDirectory, '')
}

const STATIC_FILE_PATHS = await getStaticFileAllowList()

// where this file is imported, except ./public
const ASSET_URL = (function () {
  if (import.meta.url.startsWith('file://')) {
    return `https://raw.githubusercontent.com/sullivansean27/psychess/deploy/web/server/public`
  }
  const splitUrl = import.meta.url.split('/')
  const root = splitUrl.slice(0, splitUrl.length - 1).join('/')
  return `${root}/public`
})()

// handle static routes by proxying to web resources
// https://deno.com/deploy/docs/serve-static-assets
app.use(async (ctx, next) => {
  const { url } = ctx.request
  const pathname = url.pathname === '/' ? '/index.html' : url.pathname
  const isKnownStaticFile = STATIC_FILE_PATHS.includes(pathname)
  if (!isKnownStaticFile) {
    return await next()
  }
  const assetURL = `${ASSET_URL}${pathname}`
  console.log(assetURL)
  const response = await makeRequest(assetURL)

  // get just the last bit so we can determine the correct filetype
  // contentType from media-types@v2.10.0 checks path.includes('/')
  const filePathParts = pathname.split('/')
  const contentTypeValue = contentType(filePathParts[filePathParts.length - 1])
  const headers = new Headers(response.headers)
  if (contentTypeValue) {
    headers.set('Content-Type', contentTypeValue)
  }
  if (pathname.endsWith(',js') || pathname.endsWith('.html')) {
    headers.set(
      'Content-Security-Policy',
      `default-src 'self' https://raw.githubusercontent.com; script-src 'self';`,
    )
  }
  ctx.response.headers = headers
  ctx.response.body = response.body
  ctx.response.status = response.status
})

app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

// 404
app.use((context) => {
  context.response.status = Status.NotFound
  context.response.body = `"${context.request.url}" not found`
})

console.log(`Listening on port ${port}...`)

// https://deno.com/deploy/docs/serve-static-assets
const wasmURL = new URL('chess/wasm/wasm_chess_bg.wasm', import.meta.url)
// https://github.com/rustwasm/wasm-pack/issues/672#issuecomment-813630435
await init(makeRequest(wasmURL))

// https://oakserver.github.io/oak/deploy#Handling_requests
addEventListener("fetch", app.fetchEventHandler());
