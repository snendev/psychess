import React from 'react'
import ChessBoard from 'chessboardjsx'

import {
  determineOrientation,
  Square,
} from '~/common/chess/board.ts'
import {
  Color,
  WHITE_KING_CHAR,
  WHITE_QUEEN_CHAR,
  WHITE_ROOK_CHAR,
  WHITE_BISHOP_CHAR,
  WHITE_KNIGHT_CHAR,
  WHITE_PAWN_CHAR,
  BLACK_KING_CHAR,
  BLACK_QUEEN_CHAR,
  BLACK_ROOK_CHAR,
  BLACK_BISHOP_CHAR,
  BLACK_KNIGHT_CHAR,
  BLACK_PAWN_CHAR,
  CHESS_PIECE_CHAR_TO_CODE_MAP,
  Piece,
  PieceCode,
} from '~/common/chess/pieces.ts'

const PIECES: Piece[] = [
  WHITE_KING_CHAR,
  WHITE_QUEEN_CHAR,
  WHITE_ROOK_CHAR,
  WHITE_BISHOP_CHAR,
  WHITE_KNIGHT_CHAR,
  WHITE_PAWN_CHAR,
  BLACK_KING_CHAR,
  BLACK_QUEEN_CHAR,
  BLACK_ROOK_CHAR,
  BLACK_BISHOP_CHAR,
  BLACK_KNIGHT_CHAR,
  BLACK_PAWN_CHAR,
]

function buildPuzzleLink(pieces: Record<Square, PieceCode>, turn: Color) {
  const piecesString = Object.entries(pieces)
    .map(([square, piece]) => `${piece}-${square}`)
    .join('_')
  return `${window.location.origin}?turn=${turn}&pieces=${piecesString}`
}

export default function GameEditor(): JSX.Element {
  const [pieces, setPieces] = React.useState<Record<Square, PieceCode>>({})
  const [boardIsInverted, setBoardIsInverted] = React.useState(false)
  const [colorToMove, setColorToMove] = React.useState<Color>('white')

  const [selectedNewPiece, setSelectedNewPiece] = React.useState<Piece | null>(null)

  const handleSquareSelect = React.useCallback((square: Square) => {
    if (!selectedNewPiece) return
    setPieces((prevPieces) => ({...prevPieces, [square]: CHESS_PIECE_CHAR_TO_CODE_MAP[selectedNewPiece]}))
    setSelectedNewPiece(null)
  }, [selectedNewPiece])

  const orientation = React.useMemo(
    () => determineOrientation(colorToMove, boardIsInverted),
    [colorToMove, boardIsInverted]
  )

  function toggleColorToMove() {
    setColorToMove((prevColor) => prevColor === 'white' ? 'black' : 'white')
  }

  function toggleBoardIsInverted() {
    setBoardIsInverted((prevFlip) => !prevFlip)
  }

  return (
    <div>
      <div>
        <span>{colorToMove} to move</span>
        <ChessBoard
          key="local"
          pieces={pieces}
          dropOffBoard="trash"
          id="play"
          position={pieces}
          onSquareClick={handleSquareSelect}
          orientation={orientation}
        />
      </div>
      <div>
        <div>
          {PIECES.map((piece) => (
            <button onClick={() => setSelectedNewPiece(piece)}>
              {piece}
            </button>
          ))}
          {selectedNewPiece}
        </div>
        <div>
          <button onClick={toggleColorToMove}>Change Turn</button>
          <button onClick={toggleBoardIsInverted}>Flip Board</button>
        </div>
        <a href={buildPuzzleLink(pieces, colorToMove)} target="_blank">
          Play this position
        </a>
      </div>
    </div>
  )
}
