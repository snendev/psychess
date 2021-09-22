import React from 'react'

import ChessGame from './ChessGame.tsx'
import useLocalGame from './useLocalGame.ts'

export default function LocalGame(): JSX.Element {
  const game = useLocalGame()

  return (
    <ChessGame
      key="local"
      pieces={game.pieces}
      lastMove={game.lastMove}
      moveLog={game.moveLog}
      myColor={game.myColor}
      turn={game.turn}
      getValidTargets={game.getValidTargets}
      movePiece={game.movePiece}
    />
  )
}
