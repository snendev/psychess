import {Board, Position} from '~/common/chess/board.ts'
import {Color} from '~/common/chess/pieces.ts'

export interface GameState {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  moveLog: string[]
  myColor: Color
  opponentName: string
  turn: Color
}

export interface GameActions {
  getValidTargets: (position: Position) => Position[]
  movePiece: (origin: Position, target: Position) => void
  // undoMove: () => void
}

export type Game = GameState & GameActions
