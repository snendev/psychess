import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.tsx';
import initWasm from './wasm/wasm_chess.js'
import './index.css';

initWasm()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
