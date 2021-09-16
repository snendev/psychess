import React from 'react'

import ChessBoard from './ChessBoard.tsx'
import LocalGame from './LocalGame.tsx'
import useServerGame from './useServerGame.ts'

function Connecting(): JSX.Element {
  return (
    <span>Connecting...</span>
  )
}

export default function ServerGame(): JSX.Element {
  const game = useServerGame()

  return (
    <div className="frame">
      {game.status === 'connected'
        ? (
            <ChessBoard
              key="server"
              pieces={game.handle.pieces}
              lastMove={game.handle.lastMove}
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
    </div>
  )
}
