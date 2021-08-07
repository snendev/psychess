import React, { ComponentType } from 'react'
import { useDeno } from 'framework/react'

import runGameServer from '~/lib/game.ts'

const SOCKET_PORT = 8085

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  // TODO: don't host wss on this service, so that game servers can be scaled independently
  // /web/server code should do fine here; was avoiding writing any form of proxy
  // run websocket server for games
  useDeno(() => {
    runGameServer(SOCKET_PORT)
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
