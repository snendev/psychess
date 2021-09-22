import {Board, Position} from '~/common/chess/board.ts'
import {Color} from '~/common/chess/pieces.ts'

export interface GameState {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  moveLog: string[]
  myColor: Color
  turn: Color
}

export interface Game {
  pieces: Board['pieces']
  lastMove: [Position, Position] | null
  moveLog: string[]
  myColor: Color
  turn: Color
  getValidTargets: (position: Position) => Position[]
  movePiece: (origin: Position, target: Position) => void
}
