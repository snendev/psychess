import {WebSocketEvent, WebSocket} from "ws";

export interface Client {
  id: string
  socket: WebSocket
}

type NonEmptyArray<T> = [T, ...T[]]

function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
  return arr.length > 0
}

export default class MultiClient {
  clients: NonEmptyArray<Client>

  constructor(client: Client) {
    this.clients = [client]
  }

  async* [Symbol.asyncIterator](): AsyncIterableIterator<[string, WebSocketEvent]> {
    function getIterPromise(
      {id, socket}: Client
    ): Promise<[string, WebSocketEvent]> {
      const asyncIter = socket[Symbol.asyncIterator]()
      const promise = asyncIter.next().then<[string, WebSocketEvent]>(
        (result) => [id, result.value]
      )
      return promise
    }

    const currentPromises: Record<string, Promise<[string, WebSocketEvent]>> =
      Object.fromEntries(
        this.clients.map((client) => [client.id, getIterPromise(client)]),
      )

    while (true) {
      // check for new streams
      {
        const newClients = this.clients.filter(({id}) => !(id in currentPromises))
        Object.assign(
          currentPromises,
          Object.fromEntries(newClients.map((client) => [client.id, getIterPromise(client)])),
        )
      }
      // check for old clients
      {
        const oldClients = Object.entries(currentPromises).filter(([clientId]) =>
          // any unrecognized clients have been deregistered
          !this.clients.find((client) => client.id === clientId)
        )
        oldClients.forEach(([clientId]) => {
          delete currentPromises[clientId]
        })
      }

      const promises = Object.values(currentPromises)
      // race current promises
      const [resultId, value] = await Promise.race(promises)

      // "refill" promises array
      const resolvedClient = this.clients.find(({id: clientId}) => resultId === clientId)
      if (resolvedClient) currentPromises[resultId] = getIterPromise(resolvedClient)

      yield [resultId, value]
    }
  }

  get = (index: number): Client => {
    return this.clients[index]
  }

  getClient = (id: string): Client | null => {
    const client = this.clients.find((c) => c.id === id)
    return client ?? null
  }

  register = (client: Client) => {
    this.clients.push(client)
  }

  deregister = (client: Client) => {
    const map = this.clients.reduce<Record<string, Client>>((acc, c) => {
      acc[c.id] = c
      return acc
    }, {})
    
    delete map[client.id]
    const newList = Object.values(map)
    if (isNonEmptyArray(newList)) {
      this.clients = newList
    }
  }

  publish = (data: {}) => {
    for (let i = 0; i < this.clients.length; i++) {
      for (let j = 0; j < 10; j++) {
        this.clients[i].socket.send(JSON.stringify(data))
      }
    }
  }
}
