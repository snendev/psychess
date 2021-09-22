import React from 'react'

import ChessBoard from './ChessBoard.tsx'
import MoveLog from './MoveLog.tsx'
import type {Game} from './types.ts'

const UNDO_CHAR = '<'

type ChessGameProps = Game

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
        <button onClick={props.undoMove}>{UNDO_CHAR}</button>
      </div>
    </div>
  )
}
