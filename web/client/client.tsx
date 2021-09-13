import React from 'react'
import ReactDOM from 'react-dom'

import initWasm from '~/common/wasm/wasm_chess.js'

import App from './App.tsx'

initWasm(fetch('wasm_chess.wasm'))

window.addEventListener('load', (event) => {
  ReactDOM.hydrate(<App />, document.getElementById('root'))
})
