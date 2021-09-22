import React from 'react'
import useWebSocket from 'react-use-websocket'

import {Position} from '~/common/chess/board.ts'
import {createBoard, getMoves} from '~/common/chess/wasm_utils.ts'

import { useUser } from '../user.tsx'

import type {Game, GameState} from './types.ts'

function shouldReconnect() {
  console.log('Reconnecting...')
  return true
}

type AsyncHandle<T> =
  | { status: 'not-connected' }
  | { status: 'connecting' }
  | { status: 'connected'; handle: T}

const initialState: GameState = {
  pieces: {},
  lastMove: null,
  moveLog: [],
  myColor: 'white',
  opponentName: '',
  turn: 'white',
}

type GameHookAction =
  | { type: 'update' } & Partial<GameState>
  | { type: 'close' }
  | { type: 'remove-targets' }

function reducer(state: GameState, action: GameHookAction): GameState {
  switch (action.type) {
    case 'update': {
      // TODO deeper equality checks here
      return {
        pieces: action.pieces ?? state.pieces,
        myColor: action.myColor ?? state.myColor,
        lastMove: action.lastMove ?? state.lastMove,
        moveLog: action.moveLog ?? state.moveLog,
        turn: action.turn ?? state.turn,
        opponentName: action.opponentName ?? state.opponentName,
      }
    }
    case 'close': {
      return {
        pieces: {},
        lastMove: null,
        moveLog: [],
        myColor: 'white',
        opponentName: '',
        turn: 'white',
      }
    }
    default: {
      console.warn(`Unsupported action: ${action}`)
      return state
    }
  }
}

type ServerGame = Omit<Game, 'undoMove'>

export default function useServerGame(): AsyncHandle<ServerGame> {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const {displayName: name} = useUser()

  const {pieces, lastMove, moveLog, myColor, opponentName, turn} = state

  const onMessage = React.useCallback((message: WebSocketEventMap['message']) => {
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

  const url = React.useMemo(() =>
    `wss://${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/api/ws?name=${name}`,
    [],
  )
  const socket = useWebSocket(
    url,
    {onMessage, onOpen, onError, onClose, shouldReconnect},
  )

  // keepalive loop for heroku
  React.useEffect(() => {
    const unsubscribe = setInterval(() => {
      if (socket.readyState !== WebSocket.OPEN) return
      socket.sendMessage('')
    }, 200)
    return () => {
      clearInterval(unsubscribe)
    }
  }, [socket])

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    socket.sendJsonMessage({type: 'move', origin, target})
  }, [socket])

  const getValidTargets = React.useCallback((position: Position): Position[] => {
    // turn does not matter since getMoves will ignore it anyway
    const localGame = createBoard(pieces ? {pieces, turn: 'white'} : null)
    return getMoves(localGame, position)
  }, [pieces])

  const handle = React.useMemo<ServerGame | null>(
    () =>
      pieces
        ? ({
            pieces,
            lastMove,
            moveLog,
            myColor,
            opponentName,
            turn,
            getValidTargets,
            movePiece,
          })
        : null,
    [pieces, lastMove, myColor, turn, getValidTargets, movePiece],
  )

  if (handle === null) {
    return { status: 'not-connected' }
  }

  return {status: 'connected', handle}
}
