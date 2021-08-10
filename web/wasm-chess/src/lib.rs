use std::convert::{From, Into, TryInto};
use wasm_bindgen::prelude::*;

use bojanchess::{Chess, Color, GameState, Piece, PieceType, Position, get_index_position};

#[wasm_bindgen]
pub struct WasmClient(GameState);

struct PieceRender(Option<Piece>);

impl From<PieceRender> for i32 {
    fn from(piece: PieceRender) -> Self {
        // evens are white pieces, odds are black pieces
        if let Some(piece) = piece.0 {
            let color_offset: i32 = if piece.get_color() == Color::White { 0 } else { 1 };
            let piece_type_offset: i32 = match piece.get_type() {
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
struct PositionRender(Position);

impl From<PositionRender> for i32 {
    fn from(position: PositionRender) -> Self {
        position.0.get_index().unwrap_or(100).try_into().unwrap()
    }
}

impl From<i32> for PositionRender {
    fn from(position: i32) -> Self {
        PositionRender(get_index_position(position))
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

#[wasm_bindgen]
pub fn get_piece_from_u32(value: i32) -> String {
    let adjusted = value + 1;
    let value = match (adjusted / 2, adjusted % 2) {
        (1, 0) => Some(WHITE_PAWN_CHAR),
        (1, 1) => Some(BLACK_PAWN_CHAR),
        (2, 0) => Some(WHITE_KNIGHT_CHAR),
        (2, 1) => Some(BLACK_KNIGHT_CHAR),
        (3, 0) => Some(WHITE_BISHOP_CHAR),
        (3, 1) => Some(BLACK_BISHOP_CHAR),
        (4, 0) => Some(WHITE_ROOK_CHAR),
        (4, 1) => Some(BLACK_ROOK_CHAR),
        (5, 0) => Some(WHITE_QUEEN_CHAR),
        (5, 1) => Some(BLACK_QUEEN_CHAR),
        (6, 0) => Some(WHITE_KING_CHAR),
        (6, 1) => Some(BLACK_KING_CHAR),
        (_, _) => None,
    };
    if let Some(c) = value {
        c.to_string()
    } else {
        "".to_string()
    }
}

#[wasm_bindgen]
impl WasmClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WasmClient {
        WasmClient(GameState::default())
    }

    pub fn move_piece(&mut self, origin: i32, target: i32) -> bool {
        let origin = PositionRender::from(origin).0;
        let target = PositionRender::from(target).0;
        // TODO serialize board move
        let result = self.0.move_piece(origin, target);
        result.is_ok()
    }

    pub fn get_valid_targets(&self, position: i32) -> Box<[i32]> {
        let origin = PositionRender::from(position).0;
        let targets = self.0.get_valid_targets(origin);
        match targets {
            Ok(targets) =>
                targets
                    .iter()
                    .map(|p| PositionRender(*p).into())
                    .collect::<Vec<i32>>()
                    .into_boxed_slice(),
            _ => Box::new([])
        }
    }

    pub fn is_white_turn(&self) -> bool {
        self.0.get_turn_color() == Color::White
    }

    pub fn render_board(&self) -> Box<[i32]> {
        self
            .0
            .get_board()
            .render()
            .iter()
            .map(|p| PieceRender(*p).into())
            .collect::<Vec<i32>>()
            .into_boxed_slice()
    }
}

// #[wasm_bindgen]
// pub fn get_move_history(game: &WasmClient) -> &Vec<BoardMove>;

// #[wasm_bindgen]
// pub fn get_selection(game: &WasmClient) -> &Option<GameSelection>;

// #[wasm_bindgen]
// pub fn get_result(game: &WasmClient) -> Option<GameResult>;
