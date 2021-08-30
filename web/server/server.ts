import { Application, Router, Status } from './deps.ts'
import { contentType } from './deps.ts'

import init from './wasm/wasm_chess.js'
import Game from './chess/Game.ts'
import getMoves from './chess/getMoves.ts'
import {getStaticFile, getFile} from './files.ts'
import Store from './Store.ts'

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
  // avoid CSP concerns
  ctx.response.headers.delete("content-security-policy");
  return next()
})

// handle static routes by proxying to web resources
// https://deno.com/deploy/docs/serve-static-assets
app.use(async (ctx, next) => {
  const { url } = ctx.request
  const pathname = url.pathname === '/' ? '/index.html' : url.pathname

  // first retrieve the file from github
  const response = await getStaticFile(pathname)
  if (response === null) {
    return await next()
  }

  // get just the last bit so we can determine the correct filetype
  // contentType from media-types@v2.10.0 checks path.includes('/')
  const filePathParts = pathname.split('/')
  const contentTypeValue = contentType(filePathParts[filePathParts.length - 1])
  const headers = new Headers(response.headers)
  if (contentTypeValue) {
    headers.set('Content-Type', contentTypeValue)
  }
  if (pathname.endsWith('.html')) {
    headers.set(
      'Content-Security-Policy',
      `default-src 'self' https://raw.githubusercontent.com; script-src 'self'; connect-src ws:`,
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
const WASM_PATH = 'chess/wasm/wasm_chess_bg.wasm'
// https://github.com/rustwasm/wasm-pack/issues/672#issuecomment-813630435
await init(getFile(WASM_PATH))

app.listen(':8080')
