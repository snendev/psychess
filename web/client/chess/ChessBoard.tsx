import React from 'react'
import ChessBoard from 'chessboardjsx'

import {Board, Position, Square, getSquare, getPositionIndex, getPositionFromSquare, getPosition} from '~/common/chess/board.ts'
import {CHESS_PIECE_CODE_TO_CHAR_MAP, Color, PieceCode} from '~/common/chess/pieces.ts'
import {
  create_board as createBoard,
  get_piece_index_from_character as getPieceIndex,
} from '~/common/wasm/wasm_chess.js'

function createPiecePositionSlice(pieces: Board['pieces']): Int32Array {
  const values: number[] = Object.entries(pieces).flatMap(([square, pieceCode]) => {
    const position = getPositionIndex(getPositionFromSquare(square))
    const piece = getPieceIndex(CHESS_PIECE_CODE_TO_CHAR_MAP[pieceCode])
    return [piece, position]
  })
  return new Int32Array(values)
}

function parseTargets(data: Int32Array): Position[] {
  return Array.from(data).map((positionIndex) => getPosition(positionIndex))
}

interface BoardProps {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  movePiece: (origin: Position, target: Position) => void
  myColor: Color
  turn: Color
}

export default function GameBoard(
  {pieces, lastMove, movePiece, myColor, turn}: BoardProps,
): JSX.Element {
  // bucket of arrows, highlights, etc.
  // const [features, setFeatures] = React.useState<[Square, Square | null][]>([])

  // last selected square
  const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null)
  const [validTargets, setValidTargets] = React.useState<Square[]>([])

  const allowDrag = React.useCallback(({piece}: {piece: PieceCode}) => {
    const targetColor = piece.charAt(0) === 'w' ? 'white' : 'black'
    return targetColor === myColor
  }, [myColor])

  const handleSquareSelect = React.useCallback((target: Square) => {
    setValidTargets([])
    if (!selectedSquare) {
      const slice = createPiecePositionSlice(pieces)
      const localGame = createBoard(slice, turn === 'white')
      const selectedTarget = getPositionIndex(getPositionFromSquare(target))
      const validTargetValues = localGame.get_valid_targets(selectedTarget)
      const targets = parseTargets(validTargetValues).map((position) => getSquare(position))
      setSelectedSquare(target)
      setValidTargets(targets)
      return
    }
    setSelectedSquare(null)
    if (!validTargets.includes(target)) return
    movePiece(
      getPositionFromSquare(selectedSquare),
      getPositionFromSquare(target),
    )
  }, [movePiece, pieces, selectedSquare, turn, validTargets])

  const handleDrop = React.useCallback(
    ({sourceSquare: originSquare, targetSquare}: {sourceSquare: Square, targetSquare: Square}) => {
      setSelectedSquare(null)
      movePiece(
        getPositionFromSquare(originSquare),
        getPositionFromSquare(targetSquare),
      )
    },
    [movePiece],
  )

  const squareStyles = React.useMemo(
    () => ({
      ...(lastMove ? ({
        [getSquare(lastMove[0])]: {
          backgroundColor: '#c6a220',
        },
        [getSquare(lastMove[1])]: {
          backgroundColor: '#b3a220',
        },
      }) : {}),
      ...(selectedSquare ? {
        [selectedSquare]: {
          backgroundColor: '#a2a220',
        },
      } : {}),
      ...Object.fromEntries(
        validTargets.map((target) => [
          target,
          {
            backgroundColor: '#dddddd',
          },
        ])
      ),
    }),
    [lastMove, selectedSquare, validTargets],
  )

  // TODO: when receiving a new board state reflecting a capture from the previous state,
  // ChessboardJSX seems to be deleting the key for the captured square, which is where
  // the moved piece is now located.

  return (
    <ChessBoard
      allowDrag={allowDrag}
      dropOffBoard="snapback"
      id="play"
      position={pieces}
      onSquareClick={handleSquareSelect}
      onDrop={handleDrop}
      orientation={myColor}
      squareStyles={squareStyles}
    />
  )
}
