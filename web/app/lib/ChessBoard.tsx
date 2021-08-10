import React from 'react'
import ChessBoard from 'chessboard'

import {Board, Position, Square, getPositionFromSquare} from '~/lib/board.ts'
import {Color, PieceCode} from '~/lib/pieces.ts'
// import useGame from '~/lib/useGame.ts'

interface BoardProps {
  board: Board
  myColor: Color
  movePiece: (origin: Position, target: Position) => void
}

export default function GameBoard({board, myColor, movePiece}: BoardProps): JSX.Element {
  // whether the board is shown flipped or not
  const [flipped, setFlipped] = React.useState(false)
  // highlights the last move at the turn current displayed on the board
  const [moveHighlights, setMoveHighlights] = React.useState<[Square, Square] | null>(null)
  // bucket of arrows, highlights, etc.
  // const [features, setFeatures] = React.useState<[Square, Square | null][]>([])

  // last selected square
  const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null)

  const allowDrag = React.useCallback(({piece}: {piece: PieceCode}) => {
    const targetColor = piece.charAt(0) === 'w' ? 'white' : 'black'
    return targetColor === myColor
  }, [myColor])

  // const handleSquareSelect = React.useCallback((square: Square) => {
  //   if (selectedSquare) {}
  // }, [selectedSquare])

  const handleDrop = React.useCallback(
    ({sourceSquare: originSquare, targetSquare}: {sourceSquare: Square, targetSquare: Square}) => {
      setSelectedSquare(null)
      setMoveHighlights([originSquare, targetSquare])
      movePiece(
        getPositionFromSquare(originSquare),
        getPositionFromSquare(targetSquare),
      )
    },
    [],
  )

  const {pieces} = board

  return (
    <ChessBoard
      allowDrag={allowDrag}
      dropOffBoard="snapback"
      id="play"
      position={pieces}
      // onSquareClick={handleSquareSelect}
      onDrop={handleDrop}
      squareStyles={{
        ...(moveHighlights ? ({
          [moveHighlights[0]]: {
            backgroundColor: '#c6a220',
          },
          [moveHighlights[1]]: {
            backgroundColor: '#b3a220',
          },
        }) : {}),
        ...(selectedSquare ? {
          [selectedSquare]: {
            backgroundColor: '#a2a220',
          },
        } : {}),
      }}
      flipped={flipped}
    />
  )
}
