import React from 'react'
import useWebSocket from 'react-use-websocket'

import {Board, Position} from '~/lib/board.ts'
import {Color} from '~/lib/pieces.ts'

function shouldReconnect() {
  console.log('Reconnecting...')
  return true
}

type AsyncHandle<T> =
  | { status: 'not-connected' }
  | { status: 'connecting' }
  | { status: 'connected'; handle: T}

interface Game {
  board: Board
  lastMove: [Position, Position] | null
  myColor: Color
  movePiece: (origin: Position, target: Position) => void
}

interface GameOptions {}

export default function useGame(options?: GameOptions): AsyncHandle<Game> {
  const [board, setBoard] = React.useState<Board | null>(null)
  const [color, setColor] = React.useState<Color>('white')
  const [lastMove, setLastMove] = React.useState<[Position, Position] | null>(null)

  const onMessage = React.useCallback((message: {data: string}) => {
    const data = JSON.parse(message.data)
    if ('myColor' in data) setColor(data.myColor)
    if ('lastMove' in data && data.lastMove.length > 0) setLastMove(data.lastMove)
    setBoard((prevBoard) => ({
      pieces: ('pieces' in data ? data.pieces : prevBoard?.pieces) ?? [],
    }))
  }, [])

  const onOpen = React.useCallback(() => {
    console.log('socket opened')
  }, [])

  const onError = React.useCallback((event: WebSocketEventMap['error']) => {
    console.log(event)
  }, [])

  const onClose = React.useCallback((_event: WebSocketEventMap['close']) => {
    setBoard(null)
  }, [])

  const socket = useWebSocket(
    `ws://localhost:8080/api/game`,
    {onMessage, onOpen, onError, onClose, shouldReconnect},
  )

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    socket.sendJsonMessage({type: 'select', origin, target})
  }, [socket])

  const handle = React.useMemo<Game | null>(
    () => board ? ({board, lastMove, movePiece, myColor: color}) : null,
    [board, lastMove, movePiece, color],
  )

  if (handle === null) {
    return { status: 'not-connected' }
  }

  return {status: 'connected', handle}
}
