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
                pieces={game.handle.board.pieces}
                lastMove={game.handle.lastMove}
                movePiece={game.handle.movePiece}
                myColor={game.handle.myColor}
              />
            )
          : <Connecting />
        }
      </div>
    </div>
  )
}
