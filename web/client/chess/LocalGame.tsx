import React from 'react'

import {Board} from '~/common/chess/board.ts'

import ChessGame from './ChessGame.tsx'
import useLocalGame from './useLocalGame.ts'

interface LocalGameProps {
  initialPosition: Board | null
}

export default function LocalGame({initialPosition}: LocalGameProps): JSX.Element {
  const game = useLocalGame(initialPosition)

  return (
    <div>
      <ChessGame
        key="local"
        pieces={game.pieces}
        lastMove={game.lastMove}
        moveLog={game.moveLog}
        myColor={game.myColor}
        opponentName=""
        turn={game.turn}
        getValidTargets={game.getValidTargets}
        movePiece={game.movePiece}
        // undoMove={game.undoMove}
      />
      {/* TODO: see this note */}
      <p>
        Note: this mode currently just lets you move pieces wherever as long as the move is valid.
        It does not respect turns.
      </p>
    </div>
  )
}
