import React from 'react'

import useGame from '~/lib/useGame.ts'
import ChessBoard from '~/lib/ChessBoard.tsx'

function Connecting(): JSX.Element {
  return (
    <span>Connecting...</span>
  )
}

export default function Home(): JSX.Element {
  const game = useGame()

  return (
    <div className="page">
      <head>
        <title>Psy(chic)Chess Online</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <div className="frame">
        {game.status === 'connected'
          ? (
              <ChessBoard
                pieces={game.handle.pieces}
                lastMove={game.handle.lastMove}
                movePiece={game.handle.movePiece}
                myColor={game.handle.myColor}
                turn={game.handle.turn}
              />
            )
          : <Connecting />
        }
      </div>
    </div>
  )
}
