use crate::board::Board;
use crate::color::Color;
use crate::position::Position;

#[derive(Clone, Copy)]
pub struct Turn(Color);

impl Turn {
    pub fn increment(mut self) -> Self {
        self.0 = !self.0;
        self
    }

    pub fn set_turn(mut self, color: Color) -> Self {
        self.0 = color;
        self
    }

    pub fn get_current_color(&self) -> Color {
        self.0
    }
}

// TODO: either power_map is stored inside board and mutated from here, or this might be useless
pub struct Game {
    board: Board,
    turn: Turn,
}

impl Game {
    pub fn new(color: Color) -> Self {
        let flip_board = if color == Color::White { false } else { true };
        Game {
            board: Board::new(flip_board),
            turn: Turn(Color::White),
        }
    }
}

impl std::fmt::Display for Game {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{}", self.board)
    }
}
