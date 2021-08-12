import type { APIRequest } from "aleph/types.ts";

import {Color, CHESS_PIECE_CODE_TO_CHAR_MAP} from "~/lib/pieces.ts"
import {Square, Board, Position, getPosition, getPositionIndex, getPositionFromSquare} from '~/lib/board.ts'
import {
  create_board as createBoard,
  get_piece_index_from_character as getPieceIndex,
} from '~/api/game/wasm/wasm_chess.js'

interface MovesRequestData {
  pieces: Board['pieces']
  query: Square
  turn: Color
}

interface MovesResponseData extends MovesRequestData {
  targets: unknown
}

function makeResponse(request: MovesRequestData, validMoves: unknown): MovesResponseData {
  return {...request, targets: validMoves}
}

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

export default async function handler(req: APIRequest) {
  console.log("/api/game/getMoves invoked")
  const json = await req.readBody('json')
  const {pieces, query} = json as MovesRequestData

  if (!pieces[query]) {
    req.status(200).json(makeResponse(json, []))
    return
  }

  const slice = createPiecePositionSlice(pieces)
  // turn does not matter since WasmClient.get_valid_targets will ignore it
  const boardClient = createBoard(slice, true)
  const origin = getPositionIndex(getPositionFromSquare(query))
  const data = boardClient.get_valid_targets(origin)
  const targets = parseTargets(data)
  console.log({slice, data, targets, origin, boardClient})
  req.status(200).json(makeResponse(json, targets))
}
