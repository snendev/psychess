use std::convert::TryFrom;

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum Color {
    White,
    Black,
}

impl core::ops::Not for Color {
    type Output = Color;
    fn not(self) -> Self {
        match self {
            Self::White => Self::Black,
            Self::Black => Self::White,
        }
    }
}

impl std::fmt::Display for Color {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let color = if *self == Color::White {
            "White"
        } else {
            "Black"
        };
        write!(f, "{}", color.to_string())
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Hash, Debug)]
pub enum PieceType {
    King,
    Queen,
    Rook,
    Bishop,
    Knight,
    Pawn,
}

impl std::fmt::Display for PieceType {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let piece_type = match *self {
            PieceType::King => "King",
            PieceType::Queen => "Queen",
            PieceType::Rook => "Rook",
            PieceType::Bishop => "Bishop",
            PieceType::Knight => "Knight",
            PieceType::Pawn => "Pawn",
        };
        write!(f, "{}", piece_type.to_string())
    }
}

// Piece-type characters for move logs
impl From<PieceType> for char {
    fn from(piece: PieceType) -> Self {
        match piece {
            PieceType::King => 'K',
            PieceType::Queen => 'Q',
            PieceType::Rook => 'R',
            PieceType::Bishop => 'B',
            PieceType::Knight => 'N',
            PieceType::Pawn => 'P',
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct Piece {
    color: Color,
    piece_type: PieceType,
}

impl std::fmt::Debug for Piece {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", char::from(self))
    }
}

impl std::fmt::Display for Piece {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", char::from(self))
    }
}

const WHITE_KING_CHAR: char = '\u{2654}';
const WHITE_QUEEN_CHAR: char = '\u{2655}';
const WHITE_ROOK_CHAR: char = '\u{2656}';
const WHITE_BISHOP_CHAR: char = '\u{2657}';
const WHITE_KNIGHT_CHAR: char = '\u{2658}';
const WHITE_PAWN_CHAR: char = '\u{2659}';
const BLACK_KING_CHAR: char = '\u{265A}';
const BLACK_QUEEN_CHAR: char = '\u{265B}';
const BLACK_ROOK_CHAR: char = '\u{265C}';
const BLACK_BISHOP_CHAR: char = '\u{265D}';
const BLACK_KNIGHT_CHAR: char = '\u{265E}';
const BLACK_PAWN_CHAR: char = '\u{265F}';

impl Piece {
    pub const fn new(color: Color, piece_type: PieceType) -> Self {
        Piece { color, piece_type }
    }

    pub fn get_color(&self) -> Color {
        self.color
    }

    pub fn get_type(&self) -> PieceType {
        self.piece_type
    }

    pub fn is_ally(&self, color: Color) -> bool {
        self.color == color
    }
}

impl From<&Piece> for char {
    fn from(piece: &Piece) -> Self {
        match (piece.piece_type, piece.color) {
            (PieceType::King, Color::White) => WHITE_KING_CHAR,
            (PieceType::Queen, Color::White) => WHITE_QUEEN_CHAR,
            (PieceType::Rook, Color::White) => WHITE_ROOK_CHAR,
            (PieceType::Bishop, Color::White) => WHITE_BISHOP_CHAR,
            (PieceType::Knight, Color::White) => WHITE_KNIGHT_CHAR,
            (PieceType::Pawn, Color::White) => WHITE_PAWN_CHAR,
            (PieceType::King, Color::Black) => BLACK_KING_CHAR,
            (PieceType::Queen, Color::Black) => BLACK_QUEEN_CHAR,
            (PieceType::Rook, Color::Black) => BLACK_ROOK_CHAR,
            (PieceType::Bishop, Color::Black) => BLACK_BISHOP_CHAR,
            (PieceType::Knight, Color::Black) => BLACK_KNIGHT_CHAR,
            (PieceType::Pawn, Color::Black) => BLACK_PAWN_CHAR,
        }
    }
}

// piece constants
pub const WHITE_PAWN: Piece = Piece::new(Color::White, PieceType::Pawn);
pub const WHITE_KNIGHT: Piece = Piece::new(Color::White, PieceType::Knight);
pub const WHITE_BISHOP: Piece = Piece::new(Color::White, PieceType::Bishop);
pub const WHITE_ROOK: Piece = Piece::new(Color::White, PieceType::Rook);
pub const WHITE_QUEEN: Piece = Piece::new(Color::White, PieceType::Queen);
pub const WHITE_KING: Piece = Piece::new(Color::White, PieceType::King);
pub const BLACK_PAWN: Piece = Piece::new(Color::Black, PieceType::Pawn);
pub const BLACK_KNIGHT: Piece = Piece::new(Color::Black, PieceType::Knight);
pub const BLACK_BISHOP: Piece = Piece::new(Color::Black, PieceType::Bishop);
pub const BLACK_ROOK: Piece = Piece::new(Color::Black, PieceType::Rook);
pub const BLACK_QUEEN: Piece = Piece::new(Color::Black, PieceType::Queen);
pub const BLACK_KING: Piece = Piece::new(Color::Black, PieceType::King);

impl TryFrom<char> for Piece {
    type Error = ();

    fn try_from(character: char) -> Result<Self, Self::Error> {
        match character {
            WHITE_KING_CHAR => Ok(WHITE_KING),
            WHITE_QUEEN_CHAR => Ok(WHITE_QUEEN),
            WHITE_ROOK_CHAR => Ok(WHITE_ROOK),
            WHITE_BISHOP_CHAR => Ok(WHITE_BISHOP),
            WHITE_KNIGHT_CHAR => Ok(WHITE_KNIGHT),
            WHITE_PAWN_CHAR => Ok(WHITE_PAWN),
            BLACK_KING_CHAR => Ok(BLACK_KING),
            BLACK_QUEEN_CHAR => Ok(BLACK_QUEEN),
            BLACK_ROOK_CHAR => Ok(BLACK_ROOK),
            BLACK_BISHOP_CHAR => Ok(BLACK_BISHOP),
            BLACK_KNIGHT_CHAR => Ok(BLACK_KNIGHT),
            BLACK_PAWN_CHAR => Ok(BLACK_PAWN),
            _ => Err(()),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_color() {
        let white = Color::White;
        assert_eq!(white, !!white);
        assert_ne!(white, !white);
        assert_eq!(Color::Black, !white);
        assert_eq!(!Color::Black, white);
    }
}
