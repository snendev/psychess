import React from 'react'
import useWebSocket from 'react-use-websocket'

import {Board, Position} from '~/common/chess/board.ts'
import {Color} from '~/common/chess/pieces.ts'

function shouldReconnect() {
  console.log('Reconnecting...')
  return true
}

type AsyncHandle<T> =
  | { status: 'not-connected' }
  | { status: 'connecting' }
  | { status: 'connected'; handle: T}

interface Game {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  myColor: Color
  // validTargets: Square[]
  turn: Color

  // setSelectedSquare: (square: Square) => void
  // one-way requests; have to receive responses in onMessage
  movePiece: (origin: Position, target: Position) => void
}

interface GameHookState {
  pieces: Board['pieces'] | null
  myColor: Color
  lastMove: [Position, Position] | null
  turn: Color
}

const initialState: GameHookState = {
  pieces: null,
  myColor: 'white',
  lastMove: null,
  turn: 'white',
}

type GameHookAction =
  | { type: 'update' } & Partial<GameHookState>
  | { type: 'close' }
  | { type: 'remove-targets' }

function reducer(state: GameHookState, action: GameHookAction): GameHookState {
  switch (action.type) {
    case 'update': {
      // TODO deeper equality checks here
      return {
        pieces: action.pieces ?? state.pieces,
        myColor: action.myColor ?? state.myColor,
        lastMove: action.lastMove ?? state.lastMove,
        turn: action.turn ?? state.turn,
      }
    }
    case 'close': {
      return {
        pieces: null,
        myColor: 'white',
        lastMove: null,
        turn: 'white',
      }
    }
    default: {
      console.warn(`Unsupported action: ${action}`)
      return state
    }
  }
}

interface GameOptions {}

export default function useGame(options?: GameOptions): AsyncHandle<Game> {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const {pieces, lastMove, myColor, turn} = state

  const onMessage = React.useCallback((message: {data: string}) => {
    const data = JSON.parse(message.data)
    dispatch({ type: 'update', ...data })
  }, [])

  const onOpen = React.useCallback(() => {
    console.log('socket opened')
  }, [])
  
  const onError = React.useCallback((event: WebSocketEventMap['error']) => {
    console.error(event)
  }, [])
  
  const onClose = React.useCallback((_event: WebSocketEventMap['close']) => {
    console.log('socket closed')
    dispatch({ type: 'close' })
  }, [])

  const socket = useWebSocket(
    `wss://${window.location.hostname}/api/ws`,
    {onMessage, onOpen, onError, onClose, shouldReconnect},
  )

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    socket.sendJsonMessage({type: 'move', origin, target})
  }, [socket])

  const handle = React.useMemo<Game | null>(
    () =>
      pieces
        ? ({
            pieces,
            lastMove,
            myColor,
            turn,
            movePiece,
          })
        : null,
    [pieces, lastMove, myColor, movePiece, turn],
  )

  if (handle === null) {
    return { status: 'not-connected' }
  }

  return {status: 'connected', handle}
}
