import {isWebSocketCloseEvent, isWebSocketPingEvent} from "ws";

import {isPiece, Color, PieceCode, CHESS_PIECE_CHAR_TO_CODE_MAP} from "~/lib/pieces.ts"
import {Square, Board, getPosition, getSquare, getPositionIndex} from '~/lib/board.ts'
import {
  WasmClient as GameClient,
  get_piece_from_i32 as getPieceFromI32,
} from '~/api/game/wasm/wasm_chess.js'

import MultiClient, {Client} from './MultiClient.ts'

interface BaseGameHandle {
  id: string
  game: GameClient
  clients: MultiClient
}

type ReadyGameHandle = BaseGameHandle & {
  status: 'ready'
  playerWhite: Client['id']
  playerBlack: Client['id']
}

export type GameHandle = BaseGameHandle & (
  | { status: 'open' }
  | ReadyGameHandle
)

export function isReady(handle: GameHandle): handle is ReadyGameHandle {
  return handle.status === 'ready'
}

function renderGame(client: GameClient): {pieces: Board['pieces'], turn: Color}  {
  const board = client.render_board()
  const pieces = Object.fromEntries(
    Array.from(board)
      .map<[Square, PieceCode] | null>(
        (pieceValue, positionIndex) => {
          const piece = getPieceFromI32(pieceValue)
          if (!isPiece(piece)) return null
          const position = getPosition(positionIndex)
          return [getSquare(position), CHESS_PIECE_CHAR_TO_CODE_MAP[piece]]
        }
      )
      .filter(
        <T>(value: T | null): value is T => value !== null
      )
  )
  const turn = client.is_white_turn() ? 'white' : 'black'
  return {pieces, turn}
}

export default async function runGame(gameHandle: GameHandle) {
  gameHandle.clients.publish(renderGame(gameHandle.game))

  // ping to render the game until the socket is satisfied and accepts us
  // TODO watch out for rust errors (1 &Client, 1 &mut Client)
  const firstRenderInterval = setInterval(() => {
    gameHandle.clients.publish(renderGame(gameHandle.game))
  }, 1000)

  for await (const [player, event] of gameHandle.clients) {
    if (gameHandle.status === 'open') continue
    clearInterval(firstRenderInterval)

    console.log(`player ${player}: ${event}`)
    if (typeof event === "string") {
      const json = JSON.parse(event)
      if (!Object.keys(json).includes("type")) throw new Error()

      if (json.type === "move") {
        const currentTurnId = gameHandle.game.is_white_turn()
          ? gameHandle.playerWhite
          : gameHandle.playerBlack
  
        if (player !== currentTurnId) continue

        const origin = getPositionIndex(json.origin)
        const target = getPositionIndex(json.target)
        const ok = gameHandle.game.move_piece(origin, target)
        const newTurn: Color = gameHandle.game.is_white_turn() ? 'white' : 'black'
        const board = renderGame(gameHandle.game)
        gameHandle.clients.publish({
          type: 'update',
          event,
          json,
          lastMove: ok ? [json.origin, json.target] : null,
          turn: newTurn,
          pieces: board.pieces,
        });
      }
      if (json.type === "get-valid-targets") {
        const origin = getPositionIndex(json.origin)
        const targets = gameHandle.game.get_valid_targets(origin)
        const playerClient = gameHandle.clients.getClient(player)
        const validatedTargets = Array.from(targets).map(getPosition)
        for (let i = 0; i < 10; i++) {
          playerClient?.socket.send(
            JSON.stringify({
              type: 'update',
              validatedTargets,
            })
          )
        }
      }


    } else if (isWebSocketPingEvent(event)) {
      const [, body] = event;
      console.log("ws:Ping", body);

    } else if (isWebSocketCloseEvent(event)) {
      const { code, reason } = event;
      console.log("ws:Close", code, reason);
      const playerClient = gameHandle.clients.getClient(player)
      if (playerClient) gameHandle.clients.deregister(playerClient)
    }
  }
}
