import React from 'react';
import './App.css';

import GamePage from './chess/GamePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Psy(chic) Chess
      </header>
      <main>
        <GamePage />
      </main>
    </div>
  );
}

export default App;
