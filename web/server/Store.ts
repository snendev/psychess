// store to replace with redis
export default class Store<T extends {id: string}> {
  _data: Record<string, T> = {}

  _counter = 0
  _prefix

  constructor(prefix: string) {
    this._prefix = prefix
  }

  makeId(): string {
    const id = `${this._prefix}-${this._counter}`
    this._counter += 1
    return id
  }

  get(accessor: T['id'] | T): T | undefined {
    if (typeof accessor === 'string') {
      return this._data[accessor]
    }
    return this._data[accessor.id]
  }

  set(obj: T): void {
    this._data[obj.id] = obj
  }

  find(predicate: (t: T) => boolean): T | undefined {
    const objs: T[] = Object.values(this._data)
    return objs.find(predicate)
  }

  remove(accessor: T['id'] | T) {
    const id = typeof accessor === 'string' ? accessor : accessor.id
    delete this._data[id]
  }
}
