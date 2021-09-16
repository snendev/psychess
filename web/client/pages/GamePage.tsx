import React from 'react'

import Page from '../components/Page.tsx'
import LocalGame from '../chess/LocalGame.tsx'
import ServerGame from '../chess/ServerGame.tsx'

type GameType = 'play' | 'analyze' | 'menu'

function GameFrame() {
  const [mode, setMode] = React.useState<GameType>('menu')

  switch (mode) {
    case 'analyze': return <LocalGame />
    case 'play': return <ServerGame />
    case 'menu': {
      return (
        <React.Fragment>
          <button className="menu-button" onClick={() => setMode('play')}>
            Play
          </button>
          <button className="menu-button" onClick={() => setMode('analyze')}>
            Analyze
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
