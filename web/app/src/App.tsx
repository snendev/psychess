import React from 'react';

import GameFrame from './GameFrame.tsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Psy(chic) Chess
      </header>
      <main className="main">
        <GameFrame />
      </main>
    </div>
  );
}

export default App;
