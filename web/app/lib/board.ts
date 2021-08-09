export interface Position {
  row: number
  col: number
}

export interface Board {
  pieces: Record<string, string>
  highlight?: Position
}

export function getPosition(index: number): Position {
  const row = Math.floor(index / 8)
  const col = index % 8
  return {row, col}
}

export function getFile(col: number): string {
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
