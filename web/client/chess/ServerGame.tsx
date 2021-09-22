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
          movePiece={game.handle.movePiece}
          getValidTargets={game.handle.getValidTargets}
          myColor={game.handle.myColor}
          turn={game.handle.turn}
        />
      )
    : (
      <React.Fragment>
        <Connecting />
        <LocalGame />
      </React.Fragment>
    )
}
