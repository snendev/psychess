import { Router } from 'oak'

import Store from '../Store.ts'

import getMoves from './chess/getMoves.ts'
import Game from './chess/Game.ts'

const store = new Store<Game>("id")

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
      () => {
        console.log(`closing game ${newId}`)
        store.remove(newId)
      }
    )
    game.register(thisClient)
    store.set(game)
    console.log(`${game.id} open!`)
  }
}

const apiRouter = new Router()

apiRouter
  .get('/api/ws', async (context) => {
    if (!context.isUpgradable) throw new Error('Context not upgradable.')
    const ws = await context.upgrade()
    handleSocket(ws)
  })
  .post('/api/getMoves', async (context) => {0
    console.log("/api/game/getMoves invoked")
    const json = context.request.body()
    const {pieces, query, turn} = JSON.parse(await json.value)
    const targets = getMoves(pieces, query)
    context.response.headers.set("Content-Type", "application/json") 
    context.response.body = {pieces, query, turn, targets}
  })

export default apiRouter
