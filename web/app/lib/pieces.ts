export const WHITE_KING_CHAR = '\u{2654}'
export const WHITE_QUEEN_CHAR = '\u{2655}'
export const WHITE_ROOK_CHAR = '\u{2656}'
export const WHITE_BISHOP_CHAR = '\u{2657}'
export const WHITE_KNIGHT_CHAR = '\u{2658}'
export const WHITE_PAWN_CHAR = '\u{2659}'
export const BLACK_KING_CHAR = '\u{265A}'
export const BLACK_QUEEN_CHAR = '\u{265B}'
export const BLACK_ROOK_CHAR = '\u{265C}'
export const BLACK_BISHOP_CHAR = '\u{265D}'
export const BLACK_KNIGHT_CHAR = '\u{265E}'
export const BLACK_PAWN_CHAR = '\u{265F}'

export type Color = 'black' | 'white'

export type Piece =
  | typeof WHITE_KING_CHAR
  | typeof WHITE_QUEEN_CHAR
  | typeof WHITE_ROOK_CHAR
  | typeof WHITE_BISHOP_CHAR
  | typeof WHITE_KNIGHT_CHAR
  | typeof WHITE_PAWN_CHAR
  | typeof BLACK_KING_CHAR
  | typeof BLACK_QUEEN_CHAR
  | typeof BLACK_ROOK_CHAR
  | typeof BLACK_BISHOP_CHAR 
  | typeof BLACK_KNIGHT_CHAR 
  | typeof BLACK_PAWN_CHAR

const PIECES: Set<Piece> = (function() {
  // start with a record to typecheck completeness of the array
  const PIECES_RECORD: Record<Piece, Piece> = {
    [WHITE_KING_CHAR]: WHITE_KING_CHAR,
    [WHITE_QUEEN_CHAR]: WHITE_QUEEN_CHAR,
    [WHITE_ROOK_CHAR]: WHITE_ROOK_CHAR,
    [WHITE_BISHOP_CHAR]: WHITE_BISHOP_CHAR,
    [WHITE_KNIGHT_CHAR]: WHITE_KNIGHT_CHAR,
    [WHITE_PAWN_CHAR]: WHITE_PAWN_CHAR,
    [BLACK_KING_CHAR]: BLACK_KING_CHAR,
    [BLACK_QUEEN_CHAR]: BLACK_QUEEN_CHAR,
    [BLACK_ROOK_CHAR]: BLACK_ROOK_CHAR,
    [BLACK_BISHOP_CHAR]: BLACK_BISHOP_CHAR,
    [BLACK_KNIGHT_CHAR]: BLACK_KNIGHT_CHAR,
    [BLACK_PAWN_CHAR]: BLACK_PAWN_CHAR,
  }
  return new Set(Object.values(PIECES_RECORD))
})()

export function isPiece(str: string): str is Piece {
  return PIECES.has(str as Piece)
}

export type PieceCode =
  | 'wK'
  | 'wQ'
  | 'wR'
  | 'wB'
  | 'wN'
  | 'wP'
  | 'bK'
  | 'bQ'
  | 'bR'
  | 'bB'
  | 'bN'
  | 'bP'

export const CHESSBOARD_PIECE_KEY_MAP: Record<Piece, string> = {
  [WHITE_KING_CHAR]: 'wK',
  [WHITE_QUEEN_CHAR]: 'wQ',
  [WHITE_ROOK_CHAR]: 'wR',
  [WHITE_BISHOP_CHAR]: 'wB',
  [WHITE_KNIGHT_CHAR]: 'wN',
  [WHITE_PAWN_CHAR]: 'wP',
  [BLACK_KING_CHAR]: 'bK',
  [BLACK_QUEEN_CHAR]: 'bQ',
  [BLACK_ROOK_CHAR]: 'bR',
  [BLACK_BISHOP_CHAR]: 'bB',
  [BLACK_KNIGHT_CHAR]: 'bN',
  [BLACK_PAWN_CHAR]: 'bP',
}
