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

#[derive(Clone)]
pub struct GameSelection {
    square: Position,
    pub valid_moves: Vec<Position>,
}

// TODO: either power_map is stored inside board and mutated from here, or this might be useless
pub struct GameState {
    board: Board,
    captured_pieces: Vec<Piece>,
    move_log: Vec<BoardMove>,
    selection: Option<GameSelection>,
    turn: Turn,
}

pub trait Chess {
    fn get_turn_color(&self) -> Color;

    fn get_move_history(&self) -> &Vec<BoardMove>;

    fn get_selection(&self) -> &Option<GameSelection>;

    fn get_board(&self) -> &Board;

    fn get_result(&self) -> Option<GameResult>;

    fn select_square(&mut self, position: Option<Position>);
}

impl Default for GameState {
    fn default() -> Self {
        GameState {
            board: Board::init_variant(),
            captured_pieces: vec![],
            move_log: vec![],
            selection: None,
            turn: Turn(Color::White),
        }
    }
}

impl GameState {
    fn commit_move(&mut self, target: Position, selection: &GameSelection) {
        let selected_piece = self.board.get_piece_at_position(selection.square).unwrap();
        let board_move = self.board.commit_move(&selected_piece, target);

        let mut captures = self.captured_pieces.clone();
        if let Some(board_move) = board_move {
            if let Some(captured_piece) = board_move.capture {
                captures.push(captured_piece.piece)
            }
            self.move_log.push(board_move);
            self.captured_pieces = captures;
            eprintln!("[before]: {}", self.turn.0);
            self.turn.increment();
            eprintln!("[after]: {}", self.turn.0);
        }

        self.selection = None;
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
            .filter(|piece| self.board.get_valid_moves(piece).len() != 0)
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

    fn get_selection(&self) -> &Option<GameSelection> {
        &self.selection
    }

    fn get_board(&self) -> &Board {
        &self.board
    }

    fn get_result(&self) -> Option<GameResult> {
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
    
    fn select_square(&mut self, position: Option<Position>) {
        if position.is_none() {
            self.selection = None;
            return;
        }
        let position = position.unwrap();

        // if a piece is selected, see if we can move the piece
        if let Some(selection) = &self.selection.clone() {
            if selection.valid_moves.contains(&position) {
                self.commit_move(position, selection);
            } else {
                self.selection = None;
            }
            return
        }
        // if not, see if we can select a piece
        if let Some(piece) = self.board.get_piece_at_position(position) {
            eprintln!(
                "[select-piece]: {} ({}{}) at {}",
                piece,
                piece.piece.get_color(),
                piece.piece.get_type(),
                position.get_key().unwrap(),
            );
            if self.get_turn_color() == piece.piece.get_color() {
                let valid_moves = self.board.get_valid_moves(&piece);
                self.selection = Some(GameSelection {
                    square: position,
                    valid_moves,
                });
            }
        }
    }
}
