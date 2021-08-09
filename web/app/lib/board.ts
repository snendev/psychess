export interface Position {
  row: number
  col: number
}

export type Square = string
export interface Board {
  pieces: Record<Square, string>
  highlight?: [Square, Square]
}

export function getPosition(index: number): Position {
  const row = Math.floor(index / 8)
  const col = index % 8
  return {row, col}
}

function getFile(col: number): string {
  switch (col) {
    case 0: return 'a'
    case 1: return 'b'
    case 2: return 'c'
    case 3: return 'd'
    case 4: return 'e'
    case 5: return 'f'
    case 6: return 'g'
    case 7: return 'h'
    default: throw new Error()
  }
}

export function getSquare(position: Position): Square {
  return `${getFile(position.col)}${position.row + 1}`
}

export function getPositionFromSquare(square: string): Position {
  const col = (function() {
    switch (square.charAt(0)) {
      case 'a': return 0
      case 'b': return 1
      case 'c': return 2
      case 'd': return 3
      case 'e': return 4
      case 'f': return 5
      case 'g': return 6
      case 'h': return 7
      default: return 100
    }
  })()
  const row = +square.charAt(1) - 1
  return { row, col }
}
