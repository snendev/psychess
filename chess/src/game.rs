use crate::board::{Board, BoardMove, BoardPiece};
use crate::piece::{Color, Piece, PieceType};
use crate::position::Position;

#[derive(Clone, Copy)]
pub struct Turn(Color);

impl Turn {
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

#[derive(Debug)]
pub struct GameResult {
    pub reason: GameCompletionReason,
    pub winner: Option<Color>,
}

// TODO: either power_map is stored inside board and mutated from here, or this might be useless
pub struct GameState {
    board: Board,
    captured_pieces: Vec<Piece>,
    move_log: Vec<BoardMove>,
    turn: Turn,
}

pub trait Chess {
    fn get_turn_color(&self) -> Color;

    fn get_move_history(&self) -> &Vec<BoardMove>;

    fn get_board(&self) -> &Board;

    fn get_game_result(&self) -> Option<GameResult>;

    fn get_valid_targets(&self, origin: Position) -> Result<Vec<Position>, String>;

    fn move_piece(&mut self, origin: Position, target: Position) ->  Result<BoardMove, String>;
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
            .len() != 0;
        !can_move
    }
}

// TODO: "RenderState"? how to make this into a good lib?
impl Chess for GameState {
    fn get_turn_color(&self) -> Color {
        self.turn.get_color()
    }

    fn get_move_history(&self) -> &Vec<BoardMove> {
        &self.move_log
    }

    fn get_board(&self) -> &Board {
        &self.board
    }

    fn get_game_result(&self) -> Option<GameResult> {
        if let Some(loser) = self.get_captured_king_color() {
            return Some(
                GameResult {
                    winner: Some(!loser),
                    reason: GameCompletionReason::KingCapture,
                }
            )
        } else if self.is_stalemate() {
            Some(GameResult {
                winner: Some(!self.get_turn_color()),
                reason: GameCompletionReason::Stalemate,
            })
        } else {
            None
        }
    }

    fn get_valid_targets(&self, origin: Position) -> Result<Vec<Position>, String> {
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
            origin.get_key().unwrap(),
        );
        if self.get_turn_color() == piece.piece.get_color() {
            let valid_moves = self.board.get_valid_targets(&piece);
            Ok(valid_moves)
        } else {
            Err("Wrong player's turn.".to_string())
        }
    }

    fn move_piece(&mut self, origin: Position, target: Position) -> Result<BoardMove, String> {
        let maybe_piece = self.board.get_piece_at_position(origin);
        let moving_piece = match maybe_piece {
            Some(_piece) => _piece,
            None => return Err("No piece to move at selected origin.".to_string()),
        };

        let valid_moves = self.board.get_valid_targets(&moving_piece);
        if valid_moves.contains(&target) {
            let board_move = self.board.commit_move(&moving_piece, target);
            if let Some(board_move) = board_move {
                // TODO test: does this work?
                // let mut captures = self.captured_pieces.iter_mut();
                let mut captures = self.captured_pieces.clone();
                if let Some(captured_piece) = board_move.capture {
                    captures.push(captured_piece.piece)
                }
                self.move_log.push(board_move);
                self.captured_pieces = captures;
                self.turn.increment();
                Ok(board_move)
            } else {
                Err("Invalid move.".to_string())
            }
        } else {
            Err("Target is not a valid move for selected piece.".to_string())
        }
    }
}
