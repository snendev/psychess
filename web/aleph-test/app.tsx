import React, { ComponentType } from 'react'
import { useDeno } from 'framework/react'
import { WebSocketServer, WebSocketClient } from 'websocket'

const SOCKET_PORT = 8085

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  useDeno(() => {
    const wss = new WebSocketServer(SOCKET_PORT)
    wss.on("connection", function (ws: WebSocketClient) {
      ws.on("message", function (message: string) {
        console.log(message)
        ws.send(message)
      })
    })
  })

  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  )
}
