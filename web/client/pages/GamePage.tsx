import React from 'react'

import {Board, Square} from '~/common/chess/board.ts'
import {PieceCode, Color} from '~/common/chess/pieces.ts'

import Page from '../components/Page.tsx'
import GameEditor from '../chess/GameEditor.tsx'
import LocalGame from '../chess/LocalGame.tsx'
import ServerGame from '../chess/ServerGame.tsx'

type GameType = 'play' | 'analyze' | 'menu' | 'editor'

function GameFrame() {
  const [mode, setMode] = React.useState<GameType>('menu')
  const [initialPosition, setInitialPosition] = React.useState<Board | null>(null)

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const piecesString = params.get('pieces')
    const turn = params.get('turn')
    if (piecesString !== null && turn !== null) {
      const pieces: Record<Square, PieceCode> = Object.fromEntries(
        piecesString
          .split('_')
          .map((pieceString) => {
            const [piece, square] = pieceString.split('-')
            return [square as Square, piece as PieceCode]
          })
      )
      setMode('analyze')
      setInitialPosition({pieces, turn: turn as Color})
    } else {
      window.location.replace('/')
    }
  }, [])

  switch (mode) {
    case 'analyze': return <LocalGame initialPosition={initialPosition} />
    case 'play': return <ServerGame />
    case 'editor': return <GameEditor />
    case 'menu': {
      return (
        <React.Fragment>
          <button className="menu-button" onClick={() => setMode('play')}>
            Play
          </button>
          <button className="menu-button" onClick={() => setMode('analyze')}>
            Analyze
          </button>
          <button className="menu-button" onClick={() => setMode('editor')}>
            Editor
          </button>
        </React.Fragment>
      )
    }
  }
}

export default function GamePage() {
  return (
    <Page>
      <GameFrame />
    </Page>
  )
}
