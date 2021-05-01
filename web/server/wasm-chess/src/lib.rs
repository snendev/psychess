use std::convert::{From, Into};
use wasm_bindgen::prelude::*;

use bojanchess::{Chess, Color, GameState, Piece, PieceType, Position};

#[wasm_bindgen]
pub struct WasmClient(GameState);

struct PieceRender(Option<Piece>);

impl From<PieceRender> for u32 {
    fn from(piece: PieceRender) -> Self {
        // evens are white pieces, odds are black pieces
        if let Some(piece) = piece.0 {
            let color_offset: u32 = if piece.get_color() == Color::White { 0 } else { 1 };
            let piece_type_offset: u32 = match piece.get_type() {
                PieceType::Pawn => 0,
                PieceType::Knight => 1,
                PieceType::Bishop => 2,
                PieceType::Rook => 3,
                PieceType::Queen => 4,
                PieceType::King => 5,
            };
            piece_type_offset * 2 + color_offset + 1
        } else {
            0
        }
    }
}

#[wasm_bindgen]
pub fn get_piece_from_u32(value: u32) -> String {
    let adjusted = value + 1;
    let value = match (adjusted / 2, adjusted % 2) {
        (1, 0) => "WhitePawn",
        (1, 1) => "BlackPawn",
        (2, 0) => "WhiteKnight",
        (2, 1) => "BlackKnight",
        (3, 0) => "WhiteBishop",
        (3, 1) => "BlackBishop",
        (4, 0) => "WhiteRook",
        (4, 1) => "BlackRook",
        (5, 0) => "WhiteQueen",
        (5, 1) => "BlackQueen",
        (6, 0) => "WhiteKing",
        (6, 1) => "BlackKing",
        (_, _) => "Empty",
    };
    value.to_string()
}

#[wasm_bindgen]
impl WasmClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WasmClient {
        WasmClient(GameState::default())
    }

    pub fn select_square(&mut self, row: i32, col: i32) {
        let target = Position { row, col };
        self.0.select_square(Some(target));
    }

    pub fn get_turn(&self) -> bool {
        self.0.get_turn_color() == Color::White
    }

    pub fn render_board(&self) -> Box<[u32]> {
        self
            .0
            .get_board()
            .render()
            .iter()
            .map(|p| PieceRender(*p).into())
            .collect::<Vec<u32>>()
            .into_boxed_slice()
    }
}

// #[wasm_bindgen]
// pub fn get_move_history(game: &WasmClient) -> &Vec<BoardMove>;

// #[wasm_bindgen]
// pub fn get_selection(game: &WasmClient) -> &Option<GameSelection>;

// #[wasm_bindgen]
// pub fn get_result(game: &WasmClient) -> Option<GameResult>;
