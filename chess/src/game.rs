use std::convert::TryFrom;

use crate::board::{Board, BoardPiece};
use crate::piece::{Color, Piece, PieceType};
use crate::position::Position;

#[derive(Clone, Copy)]
pub struct Turn(Color);

impl Turn {
    pub fn new(color: Color) -> Self {
        Turn(color)
    }

    pub fn increment(&mut self) -> Self {
        self.0 = !self.0;
        *self
    }

    pub fn set_turn(&mut self, color: Color) -> Self {
        self.0 = color;
        *self
    }

    pub fn get_color(&self) -> Color {
        self.0
    }
}

#[derive(Debug)]
pub enum GameCompletionReason {
    Forfeit,
    AgreedDraw,
    KingCapture,
    Stalemate,
    ThreeMoveReptition,
    FiftyMoveRule,
    // Timeout,
    // TimeoutIncompleteMaterial,
}

impl std::fmt::Display for GameCompletionReason {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let reason = match *self {
            Self::Forfeit => "forfeit",
            Self::AgreedDraw => "agreement",
            Self::KingCapture => "king capture",
            Self::Stalemate => "stalemate",
            Self::ThreeMoveReptition => "3-Move-Repetition rule",
            Self::FiftyMoveRule => "Fifty-Move rule",
        };
        write!(f, "{}", reason)
    }
}

#[derive(Clone, Copy, Debug)]
pub struct MoveEvent {
    pub piece: BoardPiece,
    pub from: Position,
    pub to: Position,
    pub capture: Option<BoardPiece>,
}

impl From<MoveEvent> for String {
    fn from(event: MoveEvent) -> Self {
        let capture: bool = event.capture.is_some();
        let piece_type_char: Option<char> = event.piece.piece.get_type().into();
        let piece_char = if let Some(c) = piece_type_char {
            Some(c)
        } else {
            event.from.get_file_char()
        };

        let subject_piece_str = if let Some(c) = piece_char {
            c.to_string()
        } else {
            "".to_string()
        };
        let capture_str = if capture { "x" } else { "" };
        let target_square_str = String::try_from(event.to).unwrap_or("".to_string());

        format![
            "{}{}{}",
            subject_piece_str,
            capture_str,
            target_square_str,
        ]
    }
}

#[derive(Debug)]
pub struct GameResult {
    pub reason: GameCompletionReason,
    pub winner: Option<Color>,
}

// TODO: either power_map is stored inside board and mutated from here, or this might be useless
pub struct GameState {
    board: Board,
    captured_pieces: Vec<Piece>,
    move_log: Vec<MoveEvent>,
    turn: Turn,
}

pub trait Chess {
    fn get_turn_color(&self) -> Color;

    fn get_move_history(&self) -> &Vec<MoveEvent>;

    fn get_board(&self) -> &Board;

    fn get_game_result(&self) -> Option<GameResult>;

    fn get_valid_targets(
        &self,
        origin: Position,
        ignore_color: bool,
    ) -> Result<Vec<Position>, String>;

    fn move_piece(&mut self, origin: Position, target: Position) -> Result<MoveEvent, String>;

    fn undo_last_move(&mut self) -> Result<(), String>;
}

impl Default for GameState {
    fn default() -> Self {
        GameState {
            board: Board::init_variant(),
            captured_pieces: vec![],
            move_log: vec![],
            turn: Turn(Color::White),
        }
    }
}

impl GameState {
    pub fn new(pieces: Vec<BoardPiece>, turn: Turn) -> Self {
        GameState {
            board: Board::new(pieces),
            // TODO: fill with unincluded pieces
            captured_pieces: vec![],
            // TODO
            move_log: vec![],
            turn,
        }
    }

    fn get_captured_king_color(&self) -> Option<Color> {
        let dead_king = self
            .captured_pieces
            .clone()
            .into_iter()
            .find(|piece| piece.get_type() == PieceType::King);
        dead_king.map(|king| king.get_color())
    }

    fn is_stalemate(&self) -> bool {
        let current_turn_pieces = self.board.get_pieces_of_color(self.get_turn_color());
        let can_move = current_turn_pieces
            .clone()
            .into_iter()
            .filter(|piece| self.board.get_valid_targets(piece).len() != 0)
            .collect::<Vec<BoardPiece>>()
            .len()
            != 0;
        !can_move
    }
}

// TODO: "RenderState"? how to make this into a good lib?
impl Chess for GameState {
    fn get_turn_color(&self) -> Color {
        self.turn.get_color()
    }

    fn get_move_history(&self) -> &Vec<MoveEvent> {
        &self.move_log
    }

    fn get_board(&self) -> &Board {
        &self.board
    }

    fn get_game_result(&self) -> Option<GameResult> {
        if let Some(loser) = self.get_captured_king_color() {
            return Some(GameResult {
                winner: Some(!loser),
                reason: GameCompletionReason::KingCapture,
            });
        } else if self.is_stalemate() {
            Some(GameResult {
                winner: Some(!self.get_turn_color()),
                reason: GameCompletionReason::Stalemate,
            })
        } else {
            None
        }
    }

    fn get_valid_targets(
        &self,
        origin: Position,
        ignore_color: bool,
    ) -> Result<Vec<Position>, String> {
        let maybe_piece = self.board.get_piece_at_position(origin);
        let piece = match maybe_piece {
            Some(_piece) => _piece,
            None => return Err("No piece to move at selected origin.".to_string()),
        };

        eprintln!(
            "[select-piece]: {} ({}{}) at {}",
            piece,
            piece.piece.get_color(),
            piece.piece.get_type(),
            String::try_from(origin).unwrap(),
        );
        if ignore_color || self.get_turn_color() == piece.piece.get_color() {
            let valid_moves = self.board.get_valid_targets(&piece);
            Ok(valid_moves)
        } else {
            Err("Wrong player's turn.".to_string())
        }
    }

    fn move_piece(&mut self, origin: Position, target: Position) -> Result<MoveEvent, String> {
        let maybe_piece = self.board.get_piece_at_position(origin);
        let moving_piece = match maybe_piece {
            Some(_piece) => _piece,
            None => return Err("No piece to move at selected origin.".to_string()),
        };

        eprintln!(
            "[commit_move]: {} -> {}",
            moving_piece,
            String::try_from(target).unwrap_or("?".to_string()),
        );

        let valid_moves = self.board.get_valid_targets(&moving_piece);
        if valid_moves.contains(&target) {
            let captured_piece = self.board.move_piece(&moving_piece, target);

            // create the MoveEvent
            let new_move = MoveEvent {
                piece: moving_piece,
                from: origin,
                to: target,
                capture: captured_piece,
            };

            if let Some(captured_piece) = new_move.capture {
                self.captured_pieces.push(captured_piece.piece)
            }
            self.move_log.push(new_move);
            self.turn.increment();
            Ok(new_move)
        } else {
            Err("Target is not a valid move for selected piece.".to_string())
        }
    }

    fn undo_last_move(&mut self) -> Result<(), String> {
        let last_board_move = self.move_log.pop();
        if let Some(last_move) = last_board_move {
            self.board.move_piece(&last_move.piece, last_move.from);
            if let Some(captured_piece) = last_move.capture {
                self.board.place_piece(captured_piece, last_move.to);
            }
            Ok(())
        } else {
            Err("Cannot undo: No moves have been made yet.".to_string())
        }
    }
}
