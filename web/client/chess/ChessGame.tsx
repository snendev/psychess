import React from 'react'

import {Position} from '~/common/chess/board.ts'

import ChessBoard from './ChessBoard.tsx'
import type {Game} from './types.ts'

  
interface ChessGameProps extends Game {
  getValidTargets: (target: Position) => Position[]
  movePiece: (origin: Position, target: Position) => void
}

export default function ChessGame(props: ChessGameProps): JSX.Element {
  const [boardIsInverted, setBoardIsInverted] = React.useState(false)

  return (
    <div>
      <ChessBoard {...props} boardIsInverted={boardIsInverted} />
      <button onClick={() => setBoardIsInverted((prev) => !prev)}>
        flip board
      </button>
    </div>
  )
}
