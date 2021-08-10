import React from 'react'
import ChessBoard from 'chessboard'

import {Board, Position, Square, getSquare, getPositionFromSquare} from '~/lib/board.ts'
import {Color, PieceCode} from '~/lib/pieces.ts'

interface BoardProps {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  movePiece: (origin: Position, target: Position) => void
  myColor: Color

  // TODO: use wasm natively here and push into ChessBoard
  validatedTargets: Position[]
  requestValidTargets: (origin: Position) => void
}

export default function GameBoard(
  {pieces, lastMove, movePiece, myColor, validatedTargets, requestValidTargets}: BoardProps,
): JSX.Element {
  // bucket of arrows, highlights, etc.
  // const [features, setFeatures] = React.useState<[Square, Square | null][]>([])

  // last selected square
  const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null)

  const allowDrag = React.useCallback(({piece}: {piece: PieceCode}) => {
    const targetColor = piece.charAt(0) === 'w' ? 'white' : 'black'
    return targetColor === myColor
  }, [myColor])

  const handleSquareSelect = React.useCallback((square: Square) => {
    const position = getPositionFromSquare(square)
    setSelectedSquare(square)
    requestValidTargets(position)
  }, [])

  const handleDrop = React.useCallback(
    ({sourceSquare: originSquare, targetSquare}: {sourceSquare: Square, targetSquare: Square}) => {
      setSelectedSquare(null)
      movePiece(
        getPositionFromSquare(originSquare),
        getPositionFromSquare(targetSquare),
      )
    },
    [],
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
        validatedTargets.map((target) => [
          getSquare(target),
          {
            backgroundColor: '#dddddd',
          },
        ])
      ),
    }),
    [lastMove, selectedSquare, validatedTargets],
    )

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
