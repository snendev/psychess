import {
  WasmClient,
  create_board as createWasmBoard,
  get_piece_index_from_character as getPieceIndex,
  get_piece_from_i32 as getPieceFromI32,
} from '../wasm/wasm_chess.js'

import {
  Board,
  Position,
  Square,
  getPositionIndex,
  getPositionFromSquare,
  getPosition,
  getSquare,
} from './board.ts'
import {
  CHESS_PIECE_CODE_TO_CHAR_MAP,
  CHESS_PIECE_CHAR_TO_CODE_MAP,
  Color,
  PieceCode,
  isPiece,
} from './pieces.ts'

function parseTargets(values: Int32Array): Position[] {
  return Array.from(values).map(getPosition)
}

function createPiecePositionSlice(slice: Board['pieces']): Int32Array {
  return new Int32Array(
    Object.entries(slice).flatMap(([square, pieceCode]) => {
      const position = getPositionIndex(getPositionFromSquare(square))
      const piece = getPieceIndex(CHESS_PIECE_CODE_TO_CHAR_MAP[pieceCode])
      return [piece, position]
    })
  )
}

export function createBoard(config: Board | null) {
  if (!config) return new WasmClient()
  const {pieces, turn} = config
  return createWasmBoard(
    createPiecePositionSlice(pieces),
    turn === 'white',
  )
}

export function getMoves(game: WasmClient, query: Position): Position[] {
  const origin = getPositionIndex(query)
  const data = game.get_valid_targets(origin)
  const targets = parseTargets(data)
  return targets
}

export function getTurn(game: WasmClient): Color {
  return game.is_white_turn() ? 'white' : 'black'
}

export function renderPieces(game: WasmClient): Record<Square, PieceCode> {
  const board = game.render_board()
  return Object.fromEntries(
    Array.from(board)
      .map<[Square, PieceCode] | null>(
        (pieceValue, positionIndex) => {
          const maybePiece = getPieceFromI32(pieceValue)
          if (!isPiece(maybePiece)) return null
          return [
            getSquare(getPosition(positionIndex)),
            CHESS_PIECE_CHAR_TO_CODE_MAP[maybePiece],
          ]
        }
      )
      .filter(
        <T>(value: T | null): value is T => value !== null
      )
  )
}
