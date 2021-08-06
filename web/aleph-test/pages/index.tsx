import React from 'react'

import useWebSocket from 'react-use-websocket'

import Logo from '~/components/logo.tsx'
import useCounter from '~/lib/useCounter.ts'

// TODO sync w/ app.tsx
const SOCKET_PORT = 8085

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()

  // TODO delegate to child page
  const {sendJsonMessage} = useWebSocket(`ws://127.0.0.1:${SOCKET_PORT}`)

  function message() {
    sendJsonMessage({type: 'test'})
  }

  return (
    <div className="page">
      <head>
        <title>WackyChess Web</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Welcome to use <strong>Aleph.js</strong>!</h1>
      <p className="links">
        <a href="https://alephjs.org" target="_blank">Website</a>
        <span></span>
        <a href="https://alephjs.org/docs/get-started" target="_blank">Get Started</a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Docs</a>
        <span></span>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">Github</a>
      </p>
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && (
          <em>...</em>
        )}
        {!isSyncing && (
          <strong>{count}</strong>
        )}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={message}>Message</button>
      </div>
    </div>
  )
}
