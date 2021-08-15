import { Application, Router, Status, send } from 'oak'

import Game from '~/chess/Game.ts'
import getMoves from '~/chess/getMoves.ts'

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
  .get('/', (context) => {
    context.response.body = "Hello world!"
  })
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

/**
 * Finds all static filenames in the /web directory.
 * 
 * @param rawpath The path for finding the file in the filesystem.
 * @param path The output form of the path by which resources are queried.
 * @returns An array of file paths to allow in static file requests.
 */
function getStaticFileNames(rawpath: string, path: string): string[] {
  return Array.from(Deno.readDirSync(rawpath)).flatMap(
    ({isDirectory, isFile, name}) => {
      if (isDirectory) {
        return getStaticFileNames(`${rawpath}/${name}`, `${path}/${name}`)
      }
      if (isFile) return [`${path}/${name}`]
      return []
    }
  )
}

// handle static routes to web resources
app.use(async (ctx, next) => {
  // retrieve files in web/ directory
  const staticFileAllowList = getStaticFileNames('./public', '')

  const filePath = ctx.request.url.pathname === '/' ? '/index.html' : ctx.request.url.pathname
  if (staticFileAllowList.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`,
    });
  }
})
app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

// 404
app.use((context) => {
  context.response.status = Status.NotFound
  context.response.body = `"${context.request.url}" not found`
})

console.log(`Listening on port ${port}...`)

await app.listen({ port })
