import React from 'react'

import {Position, getPositionIndex} from '~/common/chess/board.ts'
import {createBoard, getMoves, getTurn, renderPieces} from '~/common/chess/wasm_utils.ts'
import { WasmClient } from '~/common/wasm/wasm_chess.js'

import type {Game, GameState} from './types.ts'

const initialState: GameState = {
  pieces: {},
  lastMove: null,
  moveLog: [],
  myColor: 'white',
  turn: 'white',
}

export default function useLocalGame(): Game {
  const [state, setState] = React.useState(initialState)

  const {pieces, lastMove, moveLog, myColor, turn} = state

  const gameInstanceRef = React.useRef<WasmClient>()

  // initialize game instance
  React.useEffect(() => {
    const board = createBoard(null)
    gameInstanceRef.current = board
    setState({
      pieces: renderPieces(board),
      turn: getTurn(board),
      moveLog: board.get_move_history(),
      myColor: 'white',
      lastMove: null,
    })
  }, [])

  const movePiece = React.useCallback((origin: Position, target: Position): void => {
    const {current: gameInstance} = gameInstanceRef
    if (!gameInstance) return
    if (getTurn(gameInstance) !== turn) return

    const ok = gameInstance.move_piece(
      getPositionIndex(origin),
      getPositionIndex(target),
    )
    if (!ok) return
    const currentTurn = getTurn(gameInstance)
    setState({
      lastMove: [origin, target],
      moveLog: gameInstance.get_move_history(),
      pieces: renderPieces(gameInstance),
      myColor: currentTurn,
      turn: currentTurn,
    })
  }, [turn])

  const getValidTargets = React.useCallback((position: Position) => {
    const {current: gameInstance} = gameInstanceRef
    if (!gameInstance) return []
    return getMoves(gameInstance, position)
  }, [])

  const handle = React.useMemo<Game>(
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
