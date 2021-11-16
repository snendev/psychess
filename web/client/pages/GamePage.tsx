import React from 'react'

import Page from '../components/Page.tsx'
import GameEditor from '../chess/GameEditor.tsx'
import LocalGame from '../chess/LocalGame.tsx'
import ServerGame from '../chess/ServerGame.tsx'

type GameType = 'play' | 'analyze' | 'menu' | 'editor'

function GameFrame() {
  const [mode, setMode] = React.useState<GameType>('menu')

  switch (mode) {
    case 'analyze': return <LocalGame />
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
