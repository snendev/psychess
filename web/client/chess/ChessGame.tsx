import React from 'react'

import { useUser } from '../user.tsx'

import ChessBoard from './ChessBoard.tsx'
import MoveLog from './MoveLog.tsx'
import type {Game} from './types.ts'

const UNDO_CHAR = '<'

type ChessGameProps = Game

export default function ChessGame(props: ChessGameProps): JSX.Element {
  const [boardIsInverted, setBoardIsInverted] = React.useState(false)
  const user = useUser()

  return (
    <div className="frame">
      <div className="board-wrapper">
        <p>{props.opponentName}</p>
        <ChessBoard {...props} boardIsInverted={boardIsInverted} />
        <button onClick={() => setBoardIsInverted((prev) => !prev)}>
          flip board
        </button>
        <p>{user.displayName}</p>
      </div>
      <div className="board-menu">
        <MoveLog moves={props.moveLog} />
      </div>
    </div>
  )
}
