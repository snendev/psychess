import { serve } from "http"
import { WasmClient, get_piece_from_u32 } from "wasm_chess";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  WebSocket,
} from "ws";

let counter = 0;
function createKey(): string {
  return `${counter++}`
}

const games = new Map<string, WasmClient>();

function handleCreateGame(): string {
  const newKey = createKey()
  games.set(newKey, new WasmClient())
  return newKey
}

interface Position {
  row: number
  col: number
}

function handleSelection(game: WasmClient, position: Position | null) {
  const target = position ?? { row: 100, col: 100 }
  game.select_square(target.row, target.col)
}

const PORT = 8085;

const server = serve(`:${PORT}`)
console.log(
  `HTTP webserver running.  Access it at:  http://localhost:${PORT}/`,
);

type GameMessage =
  | { type: "select", position: Position | null }
  | { type: "other" }

async function handleGameSocket(game: WasmClient, socket: WebSocket) {
  console.log("socket connected!");
  try {
    for await (const event of socket) {
      if (typeof event === "string") {
        // text message.
        console.log("ws:Text", event);
        try {
          const json = JSON.parse(event) as GameMessage
          if (!Object.keys(json).includes("type")) throw new Error()

          if (json.type === "select") {
            handleSelection(game, json.position)
          } else {
            handleSelection(game, null)
          }
          await socket.send(event);
        } catch (error) {
          await socket.send("Invalid message.")
        }
      } else if (event instanceof Uint8Array) {
        // binary message.
        console.log("ws:Binary", event);
      } else if (isWebSocketPingEvent(event)) {
        const [, body] = event;
        // ping.
        console.log("ws:Ping", body);
      } else if (isWebSocketCloseEvent(event)) {
        // close.
        const { code, reason } = event;
        console.log("ws:Close", code, reason);
      }
    }
  } catch (err) {
    console.error(`failed to receive frame: ${err}`);

    if (!socket.isClosed) {
      await socket.close(1000).catch(console.error);
    }
  }
}

const wsRegex = /\/game\/[0-9]+/g

for await (const req of server) {
  // avoid blocking 
  (async function() {
    const { headers, method, url } = req
    
    if (url === "/index.html" && method === "GET") {
      const game = new WasmClient()
      const render = game.render_board()
      const boardArray = Array.from(render).map<string>(get_piece_from_u32)
      req.respond({ body: JSON.stringify(boardArray) })
      return
    }
    if (url === "/api/start") {
      const key = handleCreateGame()
      req.respond({ body: key })
      return
    }
    if (wsRegex.test(url)) {
      const gameId = url.slice(6)
      const game = games.get(gameId)
      if (!game) {
        req.respond({ body: "Invalid game ID." })
        return
      }
      const { conn, r: bufReader, w: bufWriter } = req
      const socket = await acceptWebSocket({
        conn,
        bufReader,
        bufWriter,
        headers
      })
      handleGameSocket(game, socket)
      return
    }
    console.log(url)
  })();
}
