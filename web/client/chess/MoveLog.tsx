import React from 'react'
  
interface MoveLogProps {
  moves: string[]
}

export default function MoveLog({moves}: MoveLogProps): JSX.Element {
  const rows = moves.reduce<[string, string | undefined][]>((currentRows, move, i) => {
    // CARE: this is a type hack
    if (i % 2 === 0) currentRows.push([move, undefined])
    else currentRows[currentRows.length - 1][1] = move
    return currentRows
  }, [])
  return (
    <table className="move-log">
      {rows.map(([left, right]) => (
        <tr>
          <td>{left}</td>
          <td>{right}</td>
        </tr>
      ))}
    </table>
  )
}
