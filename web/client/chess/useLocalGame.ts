import React from 'react'

import {Board, Position, getPositionIndex} from '~/common/chess/board.ts'
import {Color} from '~/common/chess/pieces.ts'
import {createBoard, getMoves, getTurn, renderPieces} from '~/common/chess/wasm_utils.ts'

interface Game {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  turn: Color
  getValidTargets: (position: Position) => Position[]
  movePiece: (origin: Position, target: Position) => void
}

interface GameState {
  pieces: Board['pieces'] | null
  lastMove: [Position, Position] | null
  turn: Color
}

const initialState: GameState = {
  pieces: null,
  lastMove: null,
  turn: 'white',
}

interface GameOptions {
  color: Color
}

const DEFAULT_OPTIONS = {
  color: 'white',
}

export default function useLocalGame(options: GameOptions = DEFAULT_OPTIONS): Game {
  const [state, setState] = React.useState(initialState)

  const {pieces, lastMove, turn} = state

  const gameInstanceRef = React.useRef()

  // initialize game instance
  React.useEffect(() => {
    const board = createBoard()
    gameInstanceRef.current = board
    setState({
      pieces: renderPieces(board),
      turn: getTurn(board),
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
    gameInstance.move_piece(origin, target)

    setState({
      lastMove: [origin, target],
      pieces: renderPieces(gameInstance),
      turn: getTurn(gameInstance),
    })
  }, [turn])

  const getValidTargets = React.useCallback((position: Position) => {
    const {current: gameInstance} = gameInstanceRef
    if (!gameInstance) return
    return getMoves(gameInstance, position)
  }, [])

  const handle = React.useMemo<Game>(
    () => ({
      pieces,
      lastMove,
      turn,
      getValidTargets,
      movePiece,
    }),
    [pieces, lastMove, turn, getValidTargets, movePiece],
  )

  return handle
}
