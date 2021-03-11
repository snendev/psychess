use crate::{color::Color, position::Position};

#[derive(Clone, Copy, PartialEq, Debug)]
pub enum PieceType {
    King,
    Queen,
    Rook,
    Bishop,
    Knight,
    Pawn,
}

#[derive(Clone, Copy)]
pub struct Piece {
    color: Color,
    piece_type: PieceType,
    position: Position,
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
    pub fn new(color: Color, piece_type: PieceType, position: Position) -> Self {
        Piece {
            color,
            piece_type,
            position,
        }
    }

    pub fn get_color(&self) -> Color {
        self.color
    }

    pub fn get_position(&self) -> Position {
        self.position
    }

    pub fn set_position(&mut self, position: Position) -> &Self {
        self.position = position;
        self
    }

    pub fn get_type(&self) -> PieceType {
        self.piece_type
    }

    pub fn is_at_position(&self, position: Position) -> bool {
        self.position == position
    }

    pub fn is_ally(&self, color: Color) -> bool {
        self.color == color
    }

    pub fn get_character(&self) -> char {
        match (self.piece_type, self.color) {
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
