import React from 'react'

import {Position} from '~/common/chess/board.ts'

import ChessBoard from './ChessBoard.tsx'
import MoveLog from './MoveLog.tsx'
import type {Game} from './types.ts'

const UNDO_CHAR = '<'

interface ChessGameProps extends Game {
  getValidTargets: (target: Position) => Position[]
  movePiece: (origin: Position, target: Position) => void
}

export default function ChessGame(props: ChessGameProps): JSX.Element {
  const [boardIsInverted, setBoardIsInverted] = React.useState(false)

  return (
    <div className="frame">
      <div className="board-wrapper">
        <ChessBoard {...props} boardIsInverted={boardIsInverted} />
        <button onClick={() => setBoardIsInverted((prev) => !prev)}>
          flip board
        </button>
      </div>
      <div className="board-menu">
        <MoveLog moves={props.moveLog} />
        <button onClick={() => {}}>{UNDO_CHAR}</button>
      </div>
    </div>
  )
}
