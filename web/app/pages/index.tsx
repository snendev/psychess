import React from 'react'

import useWebSocket from 'react-use-websocket'

import Logo from '~/components/logo.tsx'
import {Piece} from '~/lib/pieces.ts'

interface BoardSquareProps {
  key: string
  color: 'dark' | 'light'
  piece: Piece
  onClick: () => void
}

function BoardSquare(props: BoardSquareProps) {
  const {color, piece, onClick} = props
  return (
    <div aria-role="button" className={`square ${color}`} onClick={onClick}>
      <span>
        {piece}
      </span>
    </div>
  )
}

export default function Home(): JSX.Element {
  const [board, setBoard] = React.useState<(Piece | null)[] | null>(null)

  const onMessage = React.useCallback((message: {data: string}) => {
    const data = JSON.parse(message.data)

    if ('board' in data) {
      setBoard(data.board)
    }
  }, [])

  const onOpen = React.useCallback(() => {
    console.log('socket opened')
  }, [])

  const socket = useWebSocket(
    `ws://localhost:8080/api/game`,
    {onMessage, onOpen}
  )

  function select(row: number, col: number): void {
    socket.sendJsonMessage({type: 'select', position: {row, col}})
  }

  function message() {
    console.log('Sending a message...')
    socket.sendJsonMessage({hello: 'hello'})
  }

  return (
    <div className="page">
      <head>
        <title>WackyChess Web</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <div className="frame">
        {board !== null
          ? Array(8).fill(null).map((_, j) => (
              <div key={j}>
                {Array(8).fill(null).map((_, i) => {
                  const piece = board[i*8+j]
                  return (
                    <BoardSquare
                      key={`${piece}-${j}-${i}`}
                      color={(j + i) % 2 === 0 ? 'dark' : 'light'}
                      piece={piece}
                      onClick={() => select(j, i)}
                    />
                  )
                })}
              </div>
            ))
          : (
              <div>Connecting...</div>
            )
        }
      </div>
    </div>
  )
}
