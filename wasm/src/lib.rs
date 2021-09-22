use std::convert::{From, TryFrom};
use wasm_bindgen::prelude::*;

use psychess::{
    BoardPiece,
    Chess,
    Color,
    GameState,
    Piece,
    PieceType,
    Position,
    Turn,
};

// Code to enable using log("") fn that yields console.log() statements
//
// #[wasm_bindgen]
// extern "C" {
//     // Use `js_namespace` here to bind `console.log(..)` instead of just `log(..)`
//     #[wasm_bindgen(js_namespace = console)]
//     fn log(s: &str);
// }

#[wasm_bindgen]
pub struct WasmClient(GameState);

struct PositionRender(Position);

impl From<PositionRender> for i32 {
    fn from(position: PositionRender) -> Self {
        i32::try_from(position.0).unwrap_or(-1)
    }
}

impl From<i32> for PositionRender {
    fn from(value: i32) -> Self {
        PositionRender(Position::from(value))
    }
}

struct PieceRender(Option<Piece>);

impl From<PieceRender> for Option<char> {
    fn from(piece: PieceRender) -> Self {
        // evens are white pieces, odds are black pieces
        piece.0.map(|piece| char::from(&piece))
    }
}

impl From<PieceRender> for i32 {
    fn from(piece: PieceRender) -> Self {
        // evens are white pieces, odds are black pieces
        if let Some(piece) = piece.0 {
            let color_offset: i32 = if piece.get_color() == Color::White {
                0
            } else {
                1
            };
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

impl From<i32> for PieceRender {
    fn from(piece: i32) -> Self {
        // evens are white pieces, odds are black pieces
        if piece == 0 {
            PieceRender(None)
        } else {
            let offset = piece - 1;
            let color = if offset % 2 == 0 {
                Color::White
            } else {
                Color::Black
            };
            let piece_type = match offset / 2 {
                0 => Some(PieceType::Pawn),
                1 => Some(PieceType::Knight),
                2 => Some(PieceType::Bishop),
                3 => Some(PieceType::Rook),
                4 => Some(PieceType::Queen),
                5 => Some(PieceType::King),
                _ => None,
            };
            PieceRender(piece_type.map(|p_type| Piece::new(color, p_type)))
        }
    }
}

#[wasm_bindgen]
pub fn get_piece_from_i32(value: i32) -> String {
    let maybe_char: Option<char> = PieceRender::from(value).into();
    if let Some(c) = maybe_char {
        c.to_string()
    } else {
        "".to_string()
    }
}

#[wasm_bindgen]
pub fn get_piece_index_from_character(value: char) -> i32 {
    i32::from(PieceRender(Piece::try_from(value).ok()))
}

#[wasm_bindgen]
pub fn create_board(pieces_and_positions: &[i32], is_white_turn: bool) -> WasmClient {
    // input is actually (piece, position) tuples
    let pieces: Vec<&i32> = pieces_and_positions.clone().iter().step_by(2).collect();
    let positions: Vec<&i32> = pieces_and_positions.iter().skip(1).step_by(2).collect();

    let color = if is_white_turn {
        Color::White
    } else {
        Color::Black
    };
    let pieces: Vec<BoardPiece> = pieces
        .iter()
        .zip(positions)
        .into_iter()
        .filter_map(|(&&_piece, &_position)| {
            let position = PositionRender::from(_position).0;
            let piece = PieceRender::from(_piece).0;
            piece.map(|p| BoardPiece::new(p, position))
        })
        .collect();

    WasmClient(GameState::new(pieces.to_vec(), Turn::new(color)))
}

#[wasm_bindgen]
impl WasmClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
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
        let targets = self.0.get_valid_targets(origin, true);

        match targets {
            Ok(targets) => targets
                .iter()
                .map(|p| PositionRender(*p).into())
                .collect::<Vec<i32>>()
                .into_boxed_slice(),
            _ => Box::new([]),
        }
    }

    pub fn is_white_turn(&self) -> bool {
        self.0.get_turn_color() == Color::White
    }

    pub fn render_board(&self) -> Box<[i32]> {
        self.0
            .get_board()
            .render()
            .iter()
            .map(|p| PieceRender(*p).into())
            .collect::<Vec<i32>>()
            .into_boxed_slice()
    }

    /// Returns an array of move strings
    /// TODO update to pass an array of MoveEvent as JSValue?
    pub fn get_move_history(&self) -> Box<[JsValue]> {
        self.0
            .get_move_history()
            .iter()
            .map(|&m| {
                let str_value: String = m.into();
                JsValue::from_str(&str_value[..])
            })
            .collect::<Vec<JsValue>>()
            .into_boxed_slice()
    }

    pub fn undo_last_move(&mut self) -> () {
        self.0.undo_last_move();
    }

    // pub fn get_result(game: &WasmClient) -> Option<GameResult>;
}
