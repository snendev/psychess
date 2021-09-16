import React from 'react'

import ChessBoard from './ChessBoard.tsx'
import useLocalGame from './useLocalGame.ts'

export default function LocalGame(): JSX.Element {
  const game = useLocalGame()

  return (
    <div className="frame">
      <ChessBoard
        key="local"
        pieces={game.pieces}
        lastMove={game.lastMove}
        turn={game.turn}
        getValidTargets={game.getValidTargets}
        movePiece={game.movePiece}
      />
    </div>
  )
}
