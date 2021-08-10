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
        <title>WackyChess Web</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <div className="frame">
        {game.status === 'connected'
          ? (
              <ChessBoard
                board={game.handle.board}
                myColor="white"
                movePiece={game.handle.movePiece}
              />
            )
          : <Connecting />
        }
      </div>
    </div>
  )
}
