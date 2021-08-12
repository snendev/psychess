import React from 'react';
import './App.css';

import GameFrame from './chess/GameFrame'

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
