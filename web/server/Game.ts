import { WasmClient } from '~/common/wasm/wasm_chess.js'
import { getPosition, getPositionIndex} from '~/common/chess/board.ts'
import { getTurn, renderPieces } from '~/common/chess/wasm_utils.ts'

export interface Client {
  id: string
  socket: WebSocket
  name: string
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
    // keepalive ping event
    if (message === '') return
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
        moveLog: this._instance.get_move_history(),
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
    const {pieces, turn} = this.render()
    this.clients[playerWhiteIndex].socket.send(
      JSON.stringify({
        myColor: 'white',
        pieces,
        turn,
        opponentName: this.clients[playerBlackIndex].name,
      })
    )
    this.clients[playerBlackIndex].socket.send(
      JSON.stringify({
        myColor: 'black',
        pieces,
        turn,
        opponentName: this.clients[playerWhiteIndex].name,
      })
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

  render = () => ({
    pieces: renderPieces(this._instance),
    turn: getTurn(this._instance),
  })

  publish = (data: {}) => {
    for (let i = 0; i < this.clients.length; i++) {
      this.clients[i].socket.send(JSON.stringify(data))
    }
  }
}
