import { ServerRequest } from 'oak';
import { acceptWebSocket } from 'ws';

import {WasmClient as GameClient} from '~/chess/wasm/wasm_chess.js'

import MultiClient from './MultiClient.ts'
import runGame, {isReady, GameHandle} from './runGame.ts'
import Store from './Store.ts'

const store = new Store<GameHandle>("id")

// manages websockets joining the matchmaker
export default function handleWebSocket(req: ServerRequest) {
  const { conn, r: bufReader, w: bufWriter, headers } = req;
  console.log('Received request')
  acceptWebSocket({
    conn,
    bufReader,
    bufWriter,
    headers,
  })
    .then((socket) => {
      console.log("socket connected!");
      const foundGame = store.find((game) => game.status === 'open')
      if (foundGame) {
        foundGame.status = 'ready'
        if (!isReady(foundGame)) throw new Error()
        // decide on players and reset the store
        const thisSocketId = store.makeId()
        const {id: otherSocketId, socket: otherSocket} = foundGame.clients.get(0)
        const playerWhite = Math.random() >= 0.5 ? thisSocketId : otherSocketId
        const playerBlack = playerWhite === thisSocketId ? otherSocketId : thisSocketId

        socket.send(JSON.stringify({myColor: playerWhite === thisSocketId ? 'white' : 'black'}))
        otherSocket.send(JSON.stringify({myColor: playerWhite === otherSocketId ? 'white' : 'black'}))

        console.log(`${foundGame.id} ready!`)

        foundGame.clients.register({id: thisSocketId, socket})
        foundGame.playerWhite = playerWhite
        foundGame.playerBlack = playerBlack
        store.set(foundGame)
      } else {
        const newGame: GameHandle = {
          id: store.makeId(),
          game: new GameClient(),
          // just reuse the store ids, it's fine
          clients: new MultiClient({id: store.makeId(), socket}),
          status: 'open',
        }
        store.set(newGame)
        runGame(newGame)
        console.log(`${newGame.id} open!`)
      }
    })
    .catch(async (err: unknown) => {
      console.error(`failed to accept websocket: ${err}`);
      // await req.respond({ status: 400 });
    });
}
