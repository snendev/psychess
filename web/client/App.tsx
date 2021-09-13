import React from 'react';

import GameFrame from '~/client/chess/GameFrame.tsx'

function useIsMounted(): boolean {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  })
  return hasMounted
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
