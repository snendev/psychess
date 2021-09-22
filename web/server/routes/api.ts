import { Router } from 'oak'

import { getMoves } from '~/common/chess/wasm_utils.ts'

import Store from '../Store.ts'
import Game from '../Game.ts'

const store = new Store<Game>("id")

function handleSocket(socket: WebSocket, name: string) {
  const foundGame = store.find((game) => game.status === 'open')
  const thisSocketId = store.makeId()
  const thisClient = {id: thisSocketId, socket, name}

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
    console.log(context.params)
    handleSocket(ws, context.request.url.searchParams.get('name') ?? "(anonymous)")
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
