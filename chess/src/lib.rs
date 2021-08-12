mod game;
mod board;
mod piece;
mod position;

pub use board::{BoardPiece};
pub use game::{Chess, GameState, Turn};
pub use position::{Position, PositionColor};
pub use piece::{
    Piece,
    PieceType,
    Color,
};

pub mod pieces {
    pub use crate::piece::{
        WHITE_PAWN,
        WHITE_KNIGHT,
        WHITE_BISHOP,
        WHITE_ROOK,
        WHITE_QUEEN, 
        WHITE_KING,
        BLACK_PAWN,
        BLACK_KNIGHT,
        BLACK_BISHOP,
        BLACK_ROOK,
        BLACK_QUEEN, 
        BLACK_KING,
    };
}