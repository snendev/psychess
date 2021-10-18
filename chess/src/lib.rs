mod board;
mod game;
mod piece;
mod position;

pub use board::{BoardPiece, PowerMap};
pub use game::{Chess, GameState, MoveEvent, Turn};
pub use piece::{Color, Piece, PieceType};
pub use position::{squares, Position, PositionColor};

pub mod pieces {
    pub use crate::piece::{
        BLACK_BISHOP, BLACK_KING, BLACK_KNIGHT, BLACK_PAWN, BLACK_QUEEN, BLACK_ROOK, WHITE_BISHOP,
        WHITE_KING, WHITE_KNIGHT, WHITE_PAWN, WHITE_QUEEN, WHITE_ROOK,
    };
}
