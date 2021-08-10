import type { APIRequest } from "aleph/types.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  WebSocket,
} from "ws";

import {isPiece, CHESSBOARD_PIECE_KEY_MAP} from "~/lib/pieces.ts"
import {Square, Position, Board, getPosition, getPositionIndex, getSquare} from '~/lib/board.ts'

import {
  WasmClient as GameClient,
  get_piece_from_u32 as getPieceFromU32,
} from './wasm/wasm_chess.js'

function render(client: GameClient): Board  {
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

type GameAction =
  | {type: 'select', position: Position}

interface GameRegister {
  id: string
  status: 'open' | 'ready'
  client: GameClient
}

function handleMove(client: GameClient, origin: Position, target: Position) {
  const originIndex = getPositionIndex(origin)
  const targetIndex = getPositionIndex(target)
  console.log({originIndex, targetIndex})
  client.move_piece(originIndex, targetIndex)
}

async function handleGameSocket(game: GameClient, socket: WebSocket) {
  console.log('handling socket connection...')
  function send(data: {}) {
    socket.send(JSON.stringify(data))
  }

  // publish game state to socket via a timeout
  const timeoutId = setInterval(() => {
    if (socket.isClosed) {
      clearInterval(timeoutId)
      return
    }
    send(render(game))
  }, 1000)

  try {
    for await (const event of socket) {
      console.log(`event: ${event}`)
      if (typeof event === "string") {
        // text message.
        console.log("ws:Text", event);
        try {
          const json = JSON.parse(event)
          if (!Object.keys(json).includes("type")) throw new Error()
          console.log({loc: 'handleMove', json})
          handleMove(game, json.origin, json.target)
          send({
            event,
            json,
            board: render(game),
          });
        } catch (error) {
          send("Invalid message.")
        }
      } else if (event instanceof Uint8Array) {
        // binary message.
        console.log("ws:Binary", event);
      } else if (isWebSocketPingEvent(event)) {
        const [, body] = event;
        // ping.
        console.log("ws:Ping", body);
      } else if (isWebSocketCloseEvent(event)) {
        // close.
        const { code, reason } = event;
        console.log("ws:Close", code, reason);
      }
    }
  } catch (err) {
    console.error(`failed to receive frame: ${err}`);

    if (!socket.isClosed) {
      await socket.close(1000).catch(console.error);
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

const store = new Store<GameRegister>("game")

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
      const myConnGameId = (function() {
        const foundGame = store.find((game) => game.status === 'open')
        if (foundGame) {
          store.set({...foundGame, status: 'ready'})
          return foundGame.id
        } else {
          const newGame: GameRegister = {
            id: store.makeId(),
            client: new GameClient(),
            status: 'open',
          }
          store.set(newGame)
          return newGame.id
        }
      })()
      console.log(myConnGameId)
      const game = store.get(myConnGameId)
      if (game) handleGameSocket(game.client, socket)
      else socket.close()
    })
    .catch(async (err: unknown) => {
      console.error(`failed to accept websocket: ${err}`);
      await req.respond({ status: 400 });
    });
}
