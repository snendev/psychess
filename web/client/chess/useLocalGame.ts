import React from 'react'

import {Board, Position, getPositionIndex, getSquare} from '~/common/chess/board.ts'
import {createBoard, getMoves, getTurn, renderPieces} from '~/common/chess/wasm_utils.ts'
import {WasmClient} from '~/common/wasm/wasm_chess.js'

import type {GameActions, GameState} from './types.ts'

type LocalGameState = Omit<GameState, 'opponentName'>
type LocalGame = LocalGameState & GameActions

const initialState: LocalGameState = {
  pieces: {},
  lastMove: null,
  moveLog: [],
  myColor: 'white',
  turn: 'white',
}

export default function useLocalGame(initialPosition: Board | null): LocalGame {
  const [state, setState] = React.useState(initialPosition ? {
    ...initialState,
    ...initialPosition,
    myColor: initialPosition.turn,
  } : initialState)
  const {pieces, lastMove, moveLog, myColor, turn} = state

  const gameInstanceRef = React.useRef<WasmClient>()

  // initialize game instance
  React.useEffect(() => {
    if (initialPosition === null || Object.entries(initialPosition).length === 0) {
      const board = createBoard(null)
      gameInstanceRef.current = board
      setState({
        pieces: renderPieces(board),
        turn: getTurn(board),
        moveLog: board.get_move_history(),
        myColor: 'white',
        lastMove: null,
      })
    } else {
      const board = createBoard(initialPosition)
      gameInstanceRef.current = board
    }
  }, [initialPosition])

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    const {current: gameInstance} = gameInstanceRef
    if (!gameInstance) return
    const targetPieceCode = pieces[getSquare(origin)]
    const color = targetPieceCode.charAt(0) === 'w' ? 'white' : 'black'
    if (turn !== color) return

    const ok = gameInstance.move_piece(
      getPositionIndex(origin),
      getPositionIndex(target),
    )
    if (!ok) return
    const currentTurn = getTurn(gameInstance)
    setState(({myColor: prevMyColor}) => ({
      lastMove: [origin, target],
      moveLog: gameInstance.get_move_history(),
      pieces: renderPieces(gameInstance),
      myColor: prevMyColor,
      turn: currentTurn,
    }))
  }, [pieces, turn])

  const getValidTargets = React.useCallback((position: Position) => {
    const {current: gameInstance} = gameInstanceRef
    if (!gameInstance) return []
    return getMoves(gameInstance, position)
  }, [])

  const handle = React.useMemo<LocalGame>(
    () => ({
      pieces: pieces ?? {},
      lastMove,
      turn,
      moveLog,
      myColor,
      getValidTargets,
      movePiece,
    }),
    [pieces, lastMove, turn, getValidTargets, movePiece],
  )

  return handle
}
