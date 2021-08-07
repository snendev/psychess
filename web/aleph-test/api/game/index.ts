import type { APIRequest } from "aleph/types.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  WebSocket,
} from "ws";

import { WasmClient as GameClient, get_piece_from_u32 as getPieceFromU32 } from './chess/wasm_chess.js'

interface Position {
  row: number
  col: number
}

const WHITE_KING_CHAR = '\u{2654}'
const WHITE_QUEEN_CHAR = '\u{2655}'
const WHITE_ROOK_CHAR = '\u{2656}'
const WHITE_BISHOP_CHAR = '\u{2657}'
const WHITE_KNIGHT_CHAR = '\u{2658}'
const WHITE_PAWN_CHAR = '\u{2659}'
const BLACK_KING_CHAR = '\u{265A}'
const BLACK_QUEEN_CHAR = '\u{265B}'
const BLACK_ROOK_CHAR = '\u{265C}'
const BLACK_BISHOP_CHAR = '\u{265D}'
const BLACK_KNIGHT_CHAR = '\u{265E}'
const BLACK_PAWN_CHAR = '\u{265F}'

type Piece =
  | typeof WHITE_KING_CHAR
  | typeof WHITE_QUEEN_CHAR
  | typeof WHITE_ROOK_CHAR
  | typeof WHITE_BISHOP_CHAR
  | typeof WHITE_KNIGHT_CHAR
  | typeof WHITE_PAWN_CHAR
  | typeof BLACK_KING_CHAR
  | typeof BLACK_QUEEN_CHAR
  | typeof BLACK_ROOK_CHAR
  | typeof BLACK_BISHOP_CHAR 
  | typeof BLACK_KNIGHT_CHAR 
  | typeof BLACK_PAWN_CHAR

const PIECES: Set<Piece> = (function() {
  // start with a record to typecheck completeness of the array
  const PIECES_RECORD: Record<Piece, Piece> = {
    [WHITE_KING_CHAR]: WHITE_KING_CHAR,
    [WHITE_QUEEN_CHAR]: WHITE_QUEEN_CHAR,
    [WHITE_ROOK_CHAR]: WHITE_ROOK_CHAR,
    [WHITE_BISHOP_CHAR]: WHITE_BISHOP_CHAR,
    [WHITE_KNIGHT_CHAR]: WHITE_KNIGHT_CHAR,
    [WHITE_PAWN_CHAR]: WHITE_PAWN_CHAR,
    [BLACK_KING_CHAR]: BLACK_KING_CHAR,
    [BLACK_QUEEN_CHAR]: BLACK_QUEEN_CHAR,
    [BLACK_ROOK_CHAR]: BLACK_ROOK_CHAR,
    [BLACK_BISHOP_CHAR]: BLACK_BISHOP_CHAR,
    [BLACK_KNIGHT_CHAR]: BLACK_KNIGHT_CHAR,
    [BLACK_PAWN_CHAR]: BLACK_PAWN_CHAR,
  }
  return new Set(Object.values(PIECES_RECORD))
})()

function isPiece(str: string): str is Piece {
  return str in PIECES
}

interface GameRender {
  board: (Piece | null)[]
}

function render(client: GameClient): GameRender  {
  const board = client.render_board()
  const pieces = Array.from(board).map<Piece | null>((pieceValue) => {
    const piece = getPieceFromU32(pieceValue)
    if (isPiece(piece)) return piece
    return null
  })
  return {board: pieces}
}

type GameAction =
  | {type: 'select', position: Position}

interface GameRegister {
  id: string
  status: 'open' | 'ready'
  client: GameClient
}

async function handleGameSocket(game: GameClient, socket: WebSocket) {
  function send(data: {}) {
    socket.send(JSON.stringify(data))
  }

  // publish game state to socket via a timeout
  setTimeout(() => {
    const board = render(game)
    send(board)
  }, 400)

  try {
    for await (const event of socket) {
      if (typeof event === "string") {
        // text message.
        console.log("ws:Text", event);
        try {
          const json = JSON.parse(event)
          if (!Object.keys(json).includes("type")) throw new Error()

          if (json.type === "select") {
            handleSelection(game, json.position)
          } else {
            handleSelection(game, null)
          }
          send({event, json});
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

function handleSelection(client: GameClient, position: Position | null) {
  const target = position ?? { row: 100, col: 100 }
  client.select_square(target.row, target.col)
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
      const game = store.get(myConnGameId)
      if (game) handleGameSocket(game.client, socket)
      else socket.close()
    })
    .catch(async (err: unknown) => {
      console.error(`failed to accept websocket: ${err}`);
      await req.respond({ status: 400 });
    });
}
