import React from 'react'
import ChessBoard from 'chessboardjsx'

import {Board, Square, getSquare, getPositionFromSquare} from '~/common/chess/board.ts'
import {Color, PieceCode} from '~/common/chess/pieces.ts'

import {Game} from './types.ts'

function determineOrientation(myColor: Color, invert: boolean): Color {
  const isWhite = myColor === 'white'
  return (isWhite && !invert) || (!isWhite && invert)
    ? 'white'
    : 'black'
}

interface BoardProps extends Game {
  boardIsInverted: boolean
}

/**
 * Interface with ChessboardJSX chessboard element.
 * Performs any required data transformations and establishes control handlers.
 */
export default function Board(
  {pieces, lastMove, movePiece, myColor, turn, boardIsInverted, getValidTargets}: BoardProps,
): JSX.Element {
  // bucket of arrows, highlights, etc.
  // const [features, setFeatures] = React.useState<[Square, Square | null][]>([])

  // last selected square
  const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null)
  const [validTargets, setValidTargets] = React.useState<Square[]>([])

  const allowDrag = React.useCallback(({piece}: {piece: PieceCode}) => {
    if (!myColor) return true
    const targetColor = piece.charAt(0) === 'w' ? 'white' : 'black'
    return targetColor === myColor
  }, [myColor])

  const handleSquareSelect = React.useCallback((target: Square) => {
    setValidTargets([])
    if (!selectedSquare) {
      if (pieces[target]) {
        const targets = getValidTargets(getPositionFromSquare(target)).map(getSquare)
        setSelectedSquare(target)
        setValidTargets(targets)
      } else {
        setSelectedSquare(null)
      }
      return
    }
    setSelectedSquare(null)
    if (!validTargets.includes(target)) return
    movePiece(
      getPositionFromSquare(selectedSquare),
      getPositionFromSquare(target),
    )
  }, [movePiece, pieces, selectedSquare, turn, validTargets, getValidTargets])

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
        validTargets.map((target: Square) => [
          target,
          {
            backgroundColor: '#dddddd',
          },
        ])
      ),
    }),
    [lastMove, selectedSquare, validTargets],
  )

  const orientation = React.useMemo(() =>
    determineOrientation(myColor ?? 'white', boardIsInverted),
    [myColor, boardIsInverted]
  )

  const pieceHash = React.useMemo(
    () => Object.entries(pieces).flatMap((piece) => piece).join('-'),
    [pieces],
  )

  // TODO: when receiving a new board state reflecting a capture from the previous state,
  // ChessboardJSX seems to be deleting the key for the captured square, which is where
  // the moved piece is now located.

  return (
    <ChessBoard
      key={pieceHash}
      allowDrag={allowDrag}
      dropOffBoard="snapback"
      id="play"
      position={pieces}
      onSquareClick={handleSquareSelect}
      onDrop={handleDrop}
      orientation={orientation}
      squareStyles={squareStyles}
    />
  )
}
