import type { APIRequest } from "aleph/types.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  WebSocketEvent,
  WebSocket,
} from "ws";

import {isPiece, CHESSBOARD_PIECE_KEY_MAP} from "~/lib/pieces.ts"
import {Square, Board, getPosition, getPositionIndex, getSquare} from '~/lib/board.ts'

import {
  WasmClient as GameClient,
  get_piece_from_u32 as getPieceFromU32,
} from './wasm/wasm_chess.js'

function render(client: GameClient): {pieces: Board['pieces']}  {
  const board = client.render_board()
  const pieces = Object.fromEntries(
    Array.from(board)
      .map<[Square, string] | null>(
        (pieceValue, positionIndex) => {
          const piece = getPieceFromU32(pieceValue)
          if (!isPiece(piece)) return null
          const position = getPosition(positionIndex)
          return [getSquare(position), CHESSBOARD_PIECE_KEY_MAP[piece]]
        }
      )
      .filter(
        <T>(value: T | null): value is T => value !== null
      )
  )
  return {pieces}
}

interface Client {
  id: string
  socket: WebSocket
}

type NonEmptyArray<T> = [T, ...T[]]

function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
  return arr.length > 0
}

interface BaseGameHandle {
  id: string
  game: GameClient
  clients: MultiClient
}
type ReadyGameHandle = BaseGameHandle & {
  status: 'ready'
  playerWhite: Client['id']
  playerBlack: Client['id']
}

type GameHandle = BaseGameHandle & (
  | { status: 'open' }
  | { status: 'ready'; playerWhite: Client['id']; playerBlack: Client['id'] }
)

function isReady(handle: GameHandle): handle is ReadyGameHandle {
  return handle.status === 'ready'
}

export function sleep(ms: number){
  return new Promise((resolve) => setTimeout(resolve, ms))
}

class MultiClient {
  clients: NonEmptyArray<Client>

  constructor(client: Client) {
    this.clients = [client]
  }

  async* [Symbol.asyncIterator](): AsyncIterableIterator<[string, WebSocketEvent]> {
    function getIterPromise(
      {id, socket}: Client
    ): Promise<[string, WebSocketEvent]> {
      const asyncIter = socket[Symbol.asyncIterator]()
      const promise = asyncIter.next().then<[string, WebSocketEvent]>(
        (result) => [id, result.value]
      )
      return promise
    }

    const currentPromises: Record<string, Promise<[string, WebSocketEvent]>> =
      Object.fromEntries(
        this.clients.map((client) => [client.id, getIterPromise(client)]),
      )

    while (true) {
      // check for new streams
      const newClients = this.clients.filter(({id}) => !(id in currentPromises))
      Object.assign(
        currentPromises,
        Object.fromEntries(newClients.map((client) => [client.id, getIterPromise(client)])),
      )
      const promises = Object.values(currentPromises)

      // race current promises
      const [resultId, value] = await Promise.race(promises)

      // "refill" promises array
      const resolvedClient = this.clients.find(({id: clientId}) => resultId === clientId)
      if (resolvedClient) currentPromises[resultId] = getIterPromise(resolvedClient)

      yield [resultId, value]
    }
  }

  get = (index: number): Client => {
    return this.clients[index]
  }

  getClient = (id: string): Client | null => {
    const client = this.clients.find((c) => c.id === id)
    return client ?? null
  }

  register = (client: Client) => {
    this.clients.push(client)
  }

  deregister = (client: Client) => {
    const map = this.clients.reduce<Record<string, Client>>((acc, c) => {
      acc[c.id] = c
      return acc
    }, {})
    
    delete map[client.id]
    const newList = Object.values(map)
    if (isNonEmptyArray(newList)) {
      this.clients = newList
    }
  }

  publish = (data: {}) => {
    for (let i = 0; i < this.clients.length; i++) {
      for (let j = 0; j < 10; j++) {
        this.clients[i].socket.send(JSON.stringify(data))
      }
    }
  }
}

async function runGame(gameHandle: GameHandle) {
  gameHandle.clients.publish(render(gameHandle.game))

  // ping to render the game until the socket is satisfied and accepts us
  // TODO watch out for rust errors (1 &Client, 1 &mut Client)
  const firstRenderInterval = setInterval(() => {
    gameHandle.clients.publish(render(gameHandle.game))
  }, 1000)

  for await (const [player, event] of gameHandle.clients) {
    if (gameHandle.status === 'open') continue
    clearInterval(firstRenderInterval)

    console.log(`player ${player}: ${event}`)
    if (typeof event === "string") {
      const json = JSON.parse(event)
      if (!Object.keys(json).includes("type")) throw new Error()

      if (json.type === "move") {
        const currentTurnId = gameHandle.game.is_white_turn()
          ? gameHandle.playerWhite
          : gameHandle.playerBlack
  
        if (player !== currentTurnId) continue

        const origin = getPositionIndex(json.origin)
        const target = getPositionIndex(json.target)
        const ok = gameHandle.game.move_piece(origin, target)
        const board = render(gameHandle.game)
        gameHandle.clients.publish({
          type: 'update',
          event,
          json,
          lastMove: ok ? [json.origin, json.target] : null,
          pieces: board.pieces,
        });
      }
      if (json.type === "get-valid-targets") {
        const origin = getPositionIndex(json.origin)
        const targets = gameHandle.game.get_valid_targets(origin)
        const playerClient = gameHandle.clients.getClient(player)
        const validatedTargets = Array.from(targets).map(getPosition)
        for (let i = 0; i < 10; i++) {
          playerClient?.socket.send(
            JSON.stringify({
              type: 'update',
              validatedTargets,
            })
          )
        }
      }


    } else if (isWebSocketPingEvent(event)) {
      const [, body] = event;
      console.log("ws:Ping", body);

    } else if (isWebSocketCloseEvent(event)) {
      const { code, reason } = event;
      console.log("ws:Close", code, reason);
      const playerClient = gameHandle.clients.getClient(player)
      if (playerClient) gameHandle.clients.deregister(playerClient)
    }
  }
}

// store to replace with redis
class Store<T extends {id: string}> {
  _data: Record<string, T> = {}

  _counter = 0
  _prefix

  constructor(prefix: string) {
    this._prefix = prefix
  }

  makeId(): string {
    const id = `${this._prefix}-${this._counter}`
    this._counter += 1
    return id
  }

  get(accessor: T['id'] | T): T | undefined {
    if (typeof accessor === 'string') {
      return this._data[accessor]
    }
    return this._data[accessor.id]
  }

  set(obj: T): void {
    this._data[obj.id] = obj
  }

  find(predicate: (t: T) => boolean): T | undefined {
    const objs: T[] = Object.values(this._data)
    return objs.find(predicate)
  }
}

const store = new Store<GameHandle>("id")

export default function handler(req: APIRequest) {
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
      await req.respond({ status: 400 });
    });
}
