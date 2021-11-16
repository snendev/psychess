import React from 'react'

import ChessGame from './ChessGame.tsx'
import LocalGame from './LocalGame.tsx'
import useServerGame from './useServerGame.ts'

function Connecting(): JSX.Element {
  return (
    <span>Connecting...</span>
  )
}

export default function ServerGame(): JSX.Element {
  const game = useServerGame()

  return game.status === 'connected'
    ? (
        <ChessGame
          key="server"
          pieces={game.handle.pieces}
          lastMove={game.handle.lastMove}
          moveLog={game.handle.moveLog}
          myColor={game.handle.myColor}
          opponentName={game.handle.opponentName}
          turn={game.handle.turn}
          getValidTargets={game.handle.getValidTargets}
          movePiece={game.handle.movePiece}
        />
      )
    : (
      <React.Fragment>
        <Connecting />
        <LocalGame />
      </React.Fragment>
    )
}
