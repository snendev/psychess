import React from 'react'

import useWebSocket from 'react-use-websocket'

import Logo from '~/components/logo.tsx'


export default function Home() {
  const onMessage = React.useCallback((message: string) => {
    console.log(message)
  }, [])

  const {lastMessage, sendJsonMessage} = useWebSocket(
    `ws://localhost:8080/api/game`,
    {onMessage}
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
