import React from 'react'
import ChessBoard from 'chessboard'

import {Board, Position, Square, getSquare, getPositionFromSquare} from '~/lib/board.ts'
import {Color, PieceCode} from '~/lib/pieces.ts'

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

  React.useEffect(() => {
    if (!selectedSquare) return
    let isCurrent = true
    fetch(
      '/api/game/getMoves',
      {
        method: 'post',
        body: JSON.stringify({pieces, query: selectedSquare, turn}),
      }
    )
      .then<{targets: Position[]}>((response) => response.json())
      .then(({targets}) => {
        if (isCurrent) setValidTargets(targets.map((position) => getSquare(position)))
      })
    return () => {
      isCurrent = false
    }
  }, [pieces, selectedSquare, turn])

  const allowDrag = React.useCallback(({piece}: {piece: PieceCode}) => {
    const targetColor = piece.charAt(0) === 'w' ? 'white' : 'black'
    return targetColor === myColor
  }, [myColor])

  const handleSquareSelect = React.useCallback((target: Square) => {
    setValidTargets([])
    if (!selectedSquare) {
      setSelectedSquare(target)
      return
    }
    setSelectedSquare(null)
    if (!validTargets.includes(target)) return
    movePiece(
      getPositionFromSquare(selectedSquare),
      getPositionFromSquare(target),
    )
  }, [movePiece, selectedSquare, validTargets])

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
