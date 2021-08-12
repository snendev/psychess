import { Application, Router, Status } from 'oak'

import Game from '~/chess/Game.ts'
import getMoves from '~/chess/getMoves.ts'

import Store from './Store.ts'

const port = +(Deno.env.get('PORT') ?? 8080)

const router = new Router()

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
    const game = new Game(store.makeId())
    game.register(thisClient)
    store.set(game)
    console.log(`${game.id} open!`)
  }
}

router
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

app.use((ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*')
  return next()
})
app.use(router.routes())
app.use(router.allowedMethods())

// 404
app.use((context) => {
  context.response.status = Status.NotFound
  context.response.body = `"${context.request.url}" not found`
})

console.log(`Listening on port ${port}...`)

await app.listen({ port })
