import React from 'react'

import ChessGame from './ChessGame.tsx'
import useLocalGame from './useLocalGame.ts'

export default function LocalGame(): JSX.Element {
  const game = useLocalGame()

  return (
    <div>
      <ChessGame
        key="local"
        pieces={game.pieces}
        lastMove={game.lastMove}
        moveLog={game.moveLog}
        myColor="white"
        turn={game.turn}
        getValidTargets={game.getValidTargets}
        movePiece={game.movePiece}
      />
      {/* TODO: see this note */}
      <p>
        Note: this mode currently just lets you move pieces wherever as long as the move is valid.
        It does not respect turns.
      </p>
    </div>
  )
}
