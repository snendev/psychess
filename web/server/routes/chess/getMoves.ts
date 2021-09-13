import {
  create_board as createBoard,
  get_piece_index_from_character as getPieceIndex,
} from '~/common/wasm/wasm_chess.js'

import {CHESS_PIECE_CODE_TO_CHAR_MAP} from "~/common/chess/pieces.ts"
import {Square, Board, Position, getPosition, getPositionIndex, getPositionFromSquare} from '~/common/chess/board.ts'

function createPiecePositionSlice(pieces: Board['pieces']): Int32Array {
  const values: number[] = Object.entries(pieces).flatMap(([square, pieceCode]) => {
    const position = getPositionIndex(getPositionFromSquare(square))
    const piece = getPieceIndex(CHESS_PIECE_CODE_TO_CHAR_MAP[pieceCode])
    console.log({position, piece, square, pieceCode})
    return [piece, position]
  })
  return new Int32Array(values)
}

function parseTargets(data: Int32Array): Position[] {
  return Array.from(data).map((positionIndex) => getPosition(positionIndex))
}

export default function getMoves(pieces: Board['pieces'], query: Square): Position[] {
  if (!pieces[query]) {
    return []
  }

  const slice = createPiecePositionSlice(pieces)
  // turn does not matter since WasmClient.get_valid_targets will ignore it
  const boardClient = createBoard(slice, true)
  const origin = getPositionIndex(getPositionFromSquare(query))
  const data = boardClient.get_valid_targets(origin)
  const targets = parseTargets(data)
  return targets
}
