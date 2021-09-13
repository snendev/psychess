import React from 'react';

import GameFrame from '~/client/chess/GameFrame.tsx'

function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setIsMounted(true)
  })
  return isMounted
}

function App() {
  const isMounted = useIsMounted()
  return (
    <main className="main">
      {isMounted ? <GameFrame /> : <span>Loading...</span>}
    </main>
  )
}

export default App
