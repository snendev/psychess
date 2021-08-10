import React from 'react'
import useWebSocket from 'react-use-websocket'

import {Board, Position, getSquare} from '~/lib/board.ts'
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
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  myColor: Color
  // one-way requests; have to receive responses in onMessage
  movePiece: (origin: Position, target: Position) => void
  // TODO: use wasm natively here and push into ChessBoard
  validatedTargets: Position[]
  requestValidTargets: (origin: Position) => void
}

interface GameHookState {
  pieces: Board['pieces'] | null
  myColor: Color
  lastMove: [Position, Position] | null
  validatedTargets: Position[]
}

const initialState: GameHookState = {
  pieces: null,
  myColor: 'white',
  lastMove: null,
  validatedTargets: [],
}

type GameHookAction =
  | { type: 'update' } & Partial<GameHookState>
  | { type: 'close' }
  | { type: 'remove-targets' }

function reducer(state: GameHookState, action: GameHookAction): GameHookState {
  switch (action.type) {
    case 'update': {
      return {
        pieces: action.pieces ?? state.pieces,
        myColor: action.myColor ?? state.myColor,
        lastMove: action.lastMove ?? state.lastMove,
        validatedTargets: (action.validatedTargets?.length ?? 0) > 0
          && action.validatedTargets
          || state.validatedTargets,
      }
    }
    case 'remove-targets': {
      return {...state, validatedTargets: []}
    }
    case 'close': {
      return {
        pieces: null,
        myColor: 'white',
        lastMove: null,
        validatedTargets: [],
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
  const {pieces, lastMove, myColor, validatedTargets} = state

  const onMessage = React.useCallback((message: {data: string}) => {
    const data = JSON.parse(message.data)
    console.log(data)
    dispatch({ type: 'update', ...data })
  }, [])

  const onOpen = React.useCallback(() => {
    console.log('socket opened')
  }, [])

  const onError = React.useCallback((event: WebSocketEventMap['error']) => {
    console.log(event)
  }, [])

  const onClose = React.useCallback((_event: WebSocketEventMap['close']) => {
    dispatch({ type: 'close' })
  }, [])

  const socket = useWebSocket(
    `ws://localhost:8080/api/game`,
    {onMessage, onOpen, onError, onClose, shouldReconnect},
  )

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    socket.sendJsonMessage({type: 'move', origin, target})
  }, [socket])

  const requestValidTargets = React.useCallback((origin: Position) => {
    dispatch({ type: 'remove-targets' })
    if (pieces && getSquare(origin) in pieces) {
      socket.sendJsonMessage({type: 'get-valid-targets', origin})
    }
  }, [socket, pieces])

  const handle = React.useMemo<Game | null>(
    () =>
      pieces
        ? ({
            pieces,
            lastMove,
            myColor,
            validatedTargets,
            movePiece,
            requestValidTargets,
          })
        : null,
    [pieces, lastMove, myColor, movePiece, validatedTargets, requestValidTargets],
  )

  if (handle === null) {
    return { status: 'not-connected' }
  }

  return {status: 'connected', handle}
}
