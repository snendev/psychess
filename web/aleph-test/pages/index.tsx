import React from 'react'

import useWebSocket from 'react-use-websocket'

import Logo from '~/components/logo.tsx'

// TODO sync w/ app.tsx
const SOCKET_PORT = 8085

export default function Home() {
  const handleMessage = React.useCallback((message) => {
    console.log(message)
  }, [])

  const {lastMessage, sendJsonMessage} = useWebSocket(
    `ws://127.0.0.1:${SOCKET_PORT}`,
    {onMessage: handleMessage}
  )

  function message() {
    sendJsonMessage()
  }

  return (
    <div className="page">
      <head>
        <title>WackyChess Web</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Welcome to Wacky Chess</h1>
      <div className="counter">
        <button onClick={message}>Message</button>
      </div>
    </div>
  )
}
