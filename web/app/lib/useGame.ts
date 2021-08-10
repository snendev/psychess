import React from 'react'
import useWebSocket from 'react-use-websocket'

import {Board, Position} from '~/lib/board.ts'

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

type AsyncHandle<T> =
  | { status: 'not-connected' }
  | { status: 'connecting' }
  | { status: 'connected'; handle: T}

interface Game {
  board: Board
  movePiece: (origin: Position, target: Position) => void
}

interface GameOptions {}

export default function useGame(options?: GameOptions): AsyncHandle<Game> {
  const [board, setBoard] = React.useState<Board | null>(null)

  const onMessage = React.useCallback((message: {data: string}) => {
    const data = JSON.parse(message.data)
    if (data.type === 'ping') return
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
    {onMessage, onOpen, onError, onClose, shouldReconnect, filter: filterMessageEvents},
  )

  // React.useEffect(() => {
  //   function onPing() { console.log("ping detected", socket.send('pong')) }
  //   if (socket) socket.getWebSocket().on("ping", onPing)
  // }, [socket])

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    socket.sendJsonMessage({type: 'select', origin, target})
  }, [socket])

  const handle = React.useMemo<Game | null>(
    () => board ? ({board, movePiece}) : null,
    [board, movePiece],
  )

  if (handle === null) {
    return { status: 'not-connected' }
  }

  return {status: 'connected', handle}
}