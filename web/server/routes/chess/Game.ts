import {
  WasmClient,
  get_piece_from_i32 as getPieceFromI32,
} from '~/common/wasm/wasm_chess.js'
import {isPiece, PieceCode, CHESS_PIECE_CHAR_TO_CODE_MAP} from '~/common/chess/pieces.ts'
import {Square, getPosition, getSquare, getPositionIndex} from '~/common/chess/board.ts'

export interface Client {
  id: string
  socket: WebSocket
}

export default class Game {
  id: string
  status: 'open' | 'ready' = 'open'

  _instance: WasmClient

  clients: Client[]
  playerWhite: Client['id'] | null = null
  playerBlack: Client['id'] | null = null

  handleClose: () => void
  
  constructor(id: string, handleClose: () => void) {
    this.id = id
    this.clients = []
    this.handleClose = handleClose
    this._instance = new WasmClient()
  }

  get = (index: number): Client => {
    return this.clients[index]
  }

  getClient = (id: string): Client | null => {
    const client = this.clients.find((c) => c.id === id)
    return client ?? null
  }

  handleMessage = (player: Client, message: string) => {
    console.log(`${player.id} message: ${message}`)
    if (this.status === 'open') return

    const json = JSON.parse(message)
    if (!Object.keys(json).includes('type')) throw new Error()

    if (json.type === 'move') {
      const isWhiteTurn = this._instance.is_white_turn()
      const currentTurnId = isWhiteTurn ? this.playerWhite : this.playerBlack

      if (player.id !== currentTurnId) return

      const origin = getPositionIndex(json.origin)
      const target = getPositionIndex(json.target)
      const ok = this._instance.move_piece(origin, target)
      const {pieces, turn} = this.render()
      this.publish({
        type: 'update',
        event: message,
        json,
        lastMove: ok ? [json.origin, json.target] : null,
        turn,
        pieces: pieces,
      });
    }
    if (json.type === 'get-valid-targets') {
      const origin = getPositionIndex(json.origin)
      const targets = this._instance.get_valid_targets(origin)
      const validatedTargets = Array.from(targets).map(getPosition)
      for (let i = 0; i < 10; i++) {
        player.socket.send(
          JSON.stringify({
            type: 'update',
            validatedTargets,
          })
        )
      }
    }
  }

  handleReady = () => {
    const playerWhiteIndex = Math.random() > 0.5 ? 1 : 0
    const playerBlackIndex = playerWhiteIndex === 1 ? 0 : 1
    this.playerWhite = this.clients[playerWhiteIndex].id
    this.playerBlack = this.clients[playerBlackIndex].id
    this.status = 'ready'
    const board = this.render()
    this.clients[playerWhiteIndex].socket.send(
      JSON.stringify({myColor: 'white', ...board})
    )
    this.clients[playerBlackIndex].socket.send(
      JSON.stringify({myColor: 'black', ...board})
    )
  }

  register = (client: Client) => {
    client.socket.addEventListener('open', (event) => {
      console.log(`${client.id} socket open`)
      this.clients.push(client)
      if (this.status === 'open' && this.clients.length >= 2) {
        // TODO race condition?
        this.handleReady()
      }
    })
    client.socket.addEventListener('message', (event) => {
      this.handleMessage(client, event.data)
    })
    client.socket.addEventListener('close', (event) => {
      console.log(`${client.id} socket closed`)
      console.log(event)
      const thisClientIndex = this.clients.findIndex((_client) => _client.id === client.id)
      this.clients.splice(thisClientIndex, 1)

      if (this.clients.length === 0) {
        this.handleClose()
      }

      const disconnectedColor = client.id === this.playerWhite
        ? 'white'
        : client.id === this.playerBlack
        ? 'black'
        : null

      if (disconnectedColor) {
        this.publish({error: {disconnectedColor}})
      }
    })
  }

  deregister = (client: Client) => {
    const map = this.clients.reduce<Record<string, Client>>((acc, c) => {
      acc[c.id] = c
      return acc
    }, {})

    delete map[client.id]
    const newList = Object.values(map)
    this.clients = newList
  }

  render = () => {
    const board = this._instance.render_board()
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
    const turn = this._instance.is_white_turn() ? 'white' : 'black'
    return {pieces, turn}
  }

  publish = (data: {}) => {
    for (let i = 0; i < this.clients.length; i++) {
      this.clients[i].socket.send(JSON.stringify(data))
    }
  }
}
