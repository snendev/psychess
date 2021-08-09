import React from 'react'
import useWebSocket from 'react-use-websocket'
import ChessBoard from 'chessboard'

import {Piece} from '~/lib/pieces.ts'
import {Board, getPositionFromSquare} from '~/lib/board.ts'

interface BoardProps {
  board: Board
  select: (row: number, col: number) => void
}

function GameBoard({board, select}: BoardProps): JSX.Element {
  const [flipped, setFlipped] = React.useState(false)
  const {pieces, highlight} = board
  console.log(board)
  return (
    <ChessBoard
      draggable={false}
      dropOffBoard="snapback"
      id="play"
      position={pieces}
      onSquareClick={(squareKey: string) => {
        const { row, col } = getPositionFromSquare(squareKey)
        select(row, col)
      }}
      squareStyles={highlight ? {
        [highlight[0]]: {
          backgroundColor: '#a2a220',
        },
      } : {}}
      flipped={flipped}
    />
  )
  // return (
  //   <table className="chessboard" cellSpacing="0" cellPadding="0">
  //     {Array(8).fill(null).map((_, j) => (
  //       <tr key={j}>
  //         {Array(8).fill(null).map((_, i) => {
  //           const piece = board.pieces[i*8+j]
  //           return (
  //             <BoardSquare
  //               key={`${piece}-${j}-${i}`}
  //               color={(j + i) % 2 === 0 ? 'dark' : 'light'}
  //               piece={piece}
  //               onClick={() => select(j, i)}
  //             />
  //           )
  //         })}
  //       </tr>
  //     ))}
  //   </table>
  // )
}

function Connecting(): JSX.Element {
  return (
    <span>Connecting...</span>
  )
}

function shouldReconnect() {
  console.log('Reconnecting...')
  return true
}

function filterMessageEvents(message: WebSocketEventMap['message']): boolean {
  try {
    JSON.parse(message.data)
    return true
  } catch {
    return false
  }
}

export default function Home(): JSX.Element {
  const [board, setBoard] = React.useState<Board | null>(null)

  const onMessage = React.useCallback((message: {data: string}) => {
    const data = JSON.parse(message.data)
    setBoard((prevBoard) => ({
      pieces: ('pieces' in data ? data.pieces : prevBoard?.pieces) ?? [],
      highlight: 'highlight' in data ? data.highlight : prevBoard?.highlight,
    }))
  }, [])

  const onOpen = React.useCallback(() => {
    console.log('socket opened')
  }, [])

  const onError = React.useCallback((event: WebSocketEventMap['error']) => {
    console.log(event)
  }, [])

  const socket = useWebSocket(
    `ws://localhost:8080/api/game`,
    {onMessage, onOpen, onError, shouldReconnect, filter: filterMessageEvents}
  )

  const select = React.useCallback((row: number, col: number): void => {
    socket.sendJsonMessage({type: 'select', position: {row, col}})
  }, [socket])

  return (
    <div className="page">
      <head>
        <title>WackyChess Web</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <div className="frame">
        {board !== null
          ? <GameBoard board={board} select={select} />
          : <Connecting />
        }
      </div>
    </div>
  )
}
