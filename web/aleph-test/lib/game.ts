import { WebSocketServer, WebSocketClient } from 'websocket'

import { WasmClient as GameClient, get_piece_from_u32 as getPieceFromU32 } from '~/lib/chess/wasm_chess.js'

class MapById<T extends {id: string}> {
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

  get(accessor: T['id'] | T): T {
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

function handleSelection(client: GameClient, position: Position | null) {
  const target = position ?? { row: 100, col: 100 }
  client.select_square(target.row, target.col)
}

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

export default function runGameServer(port: number) {
  const wss = new WebSocketServer(port)

  const games = new MapById<GameRegister>("game")

  wss.on("connection", function (ws: WebSocketClient) {
    // find or create game
    // use the id rather than declaring a const so that we do not receive stale register data
    const myConnGameId = (function() {
      const foundGame = games.find((game) => game.status === 'open')
      if (foundGame) {
        games.set({...foundGame, status: 'ready'})
        return foundGame.id
      } else {
        const newGame: GameRegister = {
          id: games.makeId(),
          client: new GameClient(),
          status: 'open',
        }
        games.set(newGame)
        return newGame.id
      }
    })()

    function send(data: unknown): void {
      ws.send(JSON.stringify(data))
    }

    // publish game state to socket via a timeout
    setTimeout(() => {
      const game = games.get(myConnGameId)
      const board = render(game.client)
      send(board)
    }, 400)

    ws.on("message", function (message: string) {
      const json = JSON.parse(message)
      // TODO: set up validators early here
      if (!('type' in json)) {
        send({status: 'failure', action: json})
        return
      }

      /* else, allow only GameActions */
      const game = games.get(myConnGameId)
      if (json.type === "select") {
        handleSelection(game.client, json.position)
      } else {
        handleSelection(game.client, null)
      }
      const board = render(game.client)
      send(board)
    })
    // ws.on("close", function() {
    //   fetch(`/api/game/`)
    // })
  })
}