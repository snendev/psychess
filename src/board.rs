use std::collections::HashMap;

use crate::{
    color::Color,
    piece::{
        Piece, PieceType,
        PieceType::{Bishop, King, Knight, Pawn, Queen, Rook},
    },
    position,
    position::{Position, PositionColor},
};

// enum BoardResult {
//     IllegalMove,
//     Continue,
//     Draw,
//     Victory(Color),
// }

// enum BoardOffer {
//     Draw,
//     Resign,
//     Takeback,
// }

type PowerMap = HashMap<String, Vec<PieceType>>;

fn print_map(map: PowerMap, color: Color, show_board_flipped: bool) -> String {
    let mut grid = String::new();
    for i in 0..8 {
        for j in 0..8 {
            // TODO TEST FOR MIRRORED
            let row = if show_board_flipped { 8 - i } else { i + 1 };
            let col = if show_board_flipped { j + 1 } else { 8 - j };
            let position = Position { row, col };
            let key = position.get_key().unwrap();
            let powers = map.get(&key);
            if let Some(powers) = powers {
                for power in powers {
                    let piece = Piece::new(color, *power, position);
                    grid.push(piece.get_character());
                    grid.push(' ');
                }
                grid.push(',');
            } else {
                grid = grid + "  ,";
            }
        }
        grid.push('\r');
        grid.push('\n');
    }
    grid
}

const BISHOP_DIRECTIONS: [Position; 4] = [
    Position { row: 1, col: 1 },
    Position { row: -1, col: 1 },
    Position { row: -1, col: -1 },
    Position { row: 1, col: -1 },
];

const ROOK_DIRECTIONS: [Position; 4] = [
    Position { row: 1, col: 0 },
    Position { row: 0, col: 1 },
    Position { row: -1, col: 0 },
    Position { row: 0, col: -1 },
];

#[derive(Clone)]
pub struct BoardMove {
    pub piece: Piece,
    pub position: Position,
}

pub struct Board {
    pieces: Vec<Piece>,
    // by convention, show A1 in the bottom left corner of the board
    show_board_flipped: bool,
}

impl Board {
    pub fn new(show_board_flipped: bool) -> Self {
        let board = Board {
            pieces: vec![
                // white pieces
                Piece::new(Color::White, Rook, position::A1),
                Piece::new(Color::White, Knight, position::B1),
                Piece::new(Color::White, Bishop, position::C1),
                Piece::new(Color::White, Queen, position::D1),
                Piece::new(Color::White, King, position::E1),
                Piece::new(Color::White, Bishop, position::F1),
                Piece::new(Color::White, Knight, position::G1),
                Piece::new(Color::White, Rook, position::H1),
                Piece::new(Color::White, Pawn, position::A2),
                Piece::new(Color::White, Pawn, position::B2),
                Piece::new(Color::White, Pawn, position::C2),
                Piece::new(Color::White, Pawn, position::D2),
                Piece::new(Color::White, Pawn, position::E2),
                Piece::new(Color::White, Pawn, position::F2),
                Piece::new(Color::White, Pawn, position::G2),
                Piece::new(Color::White, Pawn, position::H2),
                // black pieces
                Piece::new(Color::Black, Rook, position::A8),
                Piece::new(Color::Black, Knight, position::B8),
                Piece::new(Color::Black, Bishop, position::C8),
                Piece::new(Color::Black, Queen, position::D8),
                Piece::new(Color::Black, King, position::E8),
                Piece::new(Color::Black, Bishop, position::F8),
                Piece::new(Color::Black, Knight, position::G8),
                Piece::new(Color::Black, Rook, position::H8),
                Piece::new(Color::Black, Pawn, position::A7),
                Piece::new(Color::Black, Pawn, position::B7),
                Piece::new(Color::Black, Pawn, position::C7),
                Piece::new(Color::Black, Pawn, position::D7),
                Piece::new(Color::Black, Pawn, position::E7),
                Piece::new(Color::Black, Pawn, position::F7),
                Piece::new(Color::Black, Pawn, position::G7),
                Piece::new(Color::Black, Pawn, position::H7),
            ],
            show_board_flipped,
        };
        board
    }

    fn get_piece_at_position(&self, square: Position) -> Option<Piece> {
        let collider = self
            .pieces
            .clone()
            .into_iter()
            .find(|piece| piece.get_position() == square);

        if let Some(piece) = collider {
            Some(piece)
        } else {
            None
        }
    }

    fn get_pawn_moves(&self, piece: Piece) -> Vec<Position> {
        let origin = piece.get_position();
        let color = piece.get_color();

        let mut target_squares = vec![];
        // TODO: distinguish my_color collision_squares from can_capture squares?
        let mut move_squares = origin
            .get_pawn_move_targets(color)
            .into_iter()
            .filter(|&square| {
                !self
                    .pieces
                    .clone()
                    .into_iter()
                    .any(|piece| piece.is_at_position(square))
            })
            .collect();
        target_squares.append(&mut move_squares);

        let mut attack_squares = origin
            .get_pawn_attack_targets(color)
            .into_iter()
            .filter(|&square| {
                self.pieces
                    .clone()
                    .into_iter()
                    .any(|piece| piece.is_at_position(square) && !piece.is_ally(color))
            })
            .collect();
        target_squares.append(&mut attack_squares);
        target_squares
    }

    fn get_knight_moves(&self, piece: Piece) -> Vec<Position> {
        let origin = piece.get_position();
        let color = piece.get_color();
        origin
            .get_knight_targets()
            .into_iter()
            .filter(|&square| {
                !self
                    .pieces
                    .clone()
                    .into_iter()
                    .any(|piece| piece.is_at_position(square) && !piece.is_ally(color))
            })
            .collect()
    }

    // TODO: a simpler api would remove can_target_allies in favor of filtering out allied positions from moves
    // (since otherwise they are "seeing" the piece and should be returned)
    // see whether this is doable
    fn walk_line(
        &self,
        piece: Piece,
        direction: Position,
        can_target_allies: bool,
    ) -> Vec<Position> {
        let origin = piece.get_position();
        let color = piece.get_color();
        let mut moves = vec![];
        let mut current_square = origin + direction;
        let mut blocking_piece: Option<Piece> = self.get_piece_at_position(current_square);
        while !current_square.is_off_board() && blocking_piece.is_none() {
            moves.push(current_square);
            current_square = current_square + direction;
            blocking_piece = self.get_piece_at_position(current_square);
        }
        if let Some(other_piece) = blocking_piece {
            if can_target_allies || !other_piece.is_ally(color) {
                moves.push(current_square);
            }
        }
        moves
    }

    fn get_bishop_moves(&self, piece: Piece, can_target_allies: bool) -> Vec<Position> {
        let mut moves = vec![];
        // four directions to walk
        for &direction in BISHOP_DIRECTIONS.iter() {
            moves.extend(self.walk_line(piece, direction, can_target_allies));
        }
        moves
    }

    fn get_rook_moves(&self, piece: Piece, can_target_allies: bool) -> Vec<Position> {
        let mut moves = vec![];
        for &direction in ROOK_DIRECTIONS.iter() {
            moves.extend(self.walk_line(piece, direction, can_target_allies));
        }
        moves
    }

    fn get_queen_moves(&self, piece: Piece, can_target_allies: bool) -> Vec<Position> {
        let mut moves = self.get_bishop_moves(piece, can_target_allies);
        let orthogonal_moves = self.get_rook_moves(piece, can_target_allies);
        moves.extend(orthogonal_moves);
        moves
    }

    fn calculate_power_map(&self, color: Color) -> PowerMap {
        let mut power_map = PowerMap::new();

        let mut push_targets = |piece_type: PieceType, targets: Vec<Position>| {
            for target in targets {
                let key = target.get_key();
                if let Some(key) = key {
                    let current_piece_powers = power_map.get(&key).unwrap_or(&vec![]).to_vec();
                    if !current_piece_powers.contains(&piece_type) {
                        let mut next_powers = current_piece_powers.clone();
                        next_powers.push(piece_type);
                        power_map.insert(key, next_powers);
                    }
                }
            }
        };

        for piece in self.pieces.clone().into_iter() {
            if piece.get_color() == color {
                let origin = piece.get_position();
                let piece_type = piece.get_type();
                let targets = match piece_type {
                    Pawn => origin.get_pawn_attack_targets(color),
                    Knight => origin.get_knight_targets(),
                    // powers do
                    Bishop => self.get_bishop_moves(piece, true),
                    Rook => self.get_rook_moves(piece, true),
                    Queen => self.get_queen_moves(piece, true),
                    King => origin.get_king_targets(),
                };
                push_targets(piece_type, targets);
            }
        }
        power_map
    }

    pub fn get_valid_moves(&self, piece: Piece) -> Vec<Position> {
        // for each piece
        // get piece position
        // powers available at position
        // yield moves for each Pos1,Pos2 tuple
        let origin = piece.get_position();
        let color = piece.get_color();
        let position_key = origin.get_key().unwrap_or("".to_string());

        let powers = self.calculate_power_map(color);
        let piece_powers = &powers[position_key.as_str()];

        let mut moves: Vec<Position> = vec![];
        for power in piece_powers {
            let mut target_squares: Vec<Position> = match power {
                // todo: en passent
                Pawn => self.get_pawn_moves(piece),
                Knight => self.get_knight_moves(piece),
                // cannot capture your own pieces
                Bishop => self.get_bishop_moves(piece, false),
                Rook => self.get_rook_moves(piece, false),
                Queen => self.get_queen_moves(piece, false),
                // todo: castling
                King => {
                    origin
                        .get_king_targets()
                        .into_iter()
                        .filter(|&target| {
                            // filter out if any piece on my team is in the way
                            self.pieces.clone().into_iter().any(|collider| {
                                collider.is_ally(color) && collider.is_at_position(target)
                            })
                        })
                        .collect()
                }
            };
            moves.append(&mut target_squares);
        }
        moves
    }

    pub fn commit_move(
        &mut self,
        piece: &mut Piece,
        position: Position,
    ) -> Result<BoardMove, String> {
        let is_valid = self
            .get_valid_moves(*piece)
            .iter()
            .any(|target| *target == position);
        if is_valid {
            // TODO HANDLE CAPTURE
            piece.set_position(position);
            let new_move = BoardMove {
                piece: piece.clone(),
                position: position,
            };
            Ok(new_move)
        } else {
            Err("Invalid move".to_string())
        }
    }

    pub fn print_power_map(&self, color: Color) -> String {
        let power_map = self.calculate_power_map(color);
        format!("{}", print_map(power_map, color, self.show_board_flipped))
    }
}

impl Default for Board {
    fn default() -> Board {
        Board::new(false)
    }
}

const HBAR: char = '\u{2015}';
const VBAR: char = '|';

fn repeat_char(character: char, times: i32) -> String {
    let mut string = String::new();
    for _ in 0..times {
        string.push(character);
    }
    string
}

impl std::fmt::Display for Board {
    // prints a chess board
    // each cell is 5-chars wide (including both edges):
    //      Border, Space/Dot, Piece/Space, Space/Dot, Border
    // the same is true for height
    // spaces indicates light squares, dots indicate dark squares
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        let mut board_map: [Option<&Piece>; 64] = [None; 64];
        // invertible function mapping visual space to board space
        let transform_position = |position: Position| Position {
            row: if self.show_board_flipped {
                8 - position.row
            } else {
                position.row - 1
            },
            col: if self.show_board_flipped {
                8 - position.col
            } else {
                position.col - 1
            },
        };
        for piece in &self.pieces {
            let position = piece.get_position();
            // in order from top to bottom, the row on which to display the piece
            // if show_board_flipped, A1 appears in the top right corner
            let visual_position = transform_position(position);
            let index = (visual_position.row * 8 + visual_position.col) as usize;
            board_map[index] = Some(piece);
        }

        let hbar_line = repeat_char(HBAR, 1 + 4 * 8) + "\r\n";

        let mut board_display = String::new();
        for y in 0..8 {
            board_display = board_display + &hbar_line.clone();
            board_display.push(VBAR);
            for x in 0..8 {
                let index = (y * 8 + x) as usize;
                let position = transform_position(Position { row: y, col: x });
                let square_color = position
                    .get_position_color()
                    .unwrap_or(PositionColor::Light);

                let square_color_character = match square_color {
                    PositionColor::Light => '\u{2008}',
                    PositionColor::Dark => '\u{00B7}',
                };
                let piece_character = match board_map[index] {
                    Some(piece) => piece.get_character(),
                    None => square_color_character,
                };

                board_display.push(square_color_character);
                board_display.push(piece_character);
                board_display.push(square_color_character);
                board_display.push(VBAR);
            }
            board_display.push('\r');
            board_display.push('\n');
        }
        board_display = board_display + &hbar_line.clone();
        write!(f, "{}", board_display)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calculate_power_map() -> Result<(), String> {
        let pawn_position = Position { row: 3, col: 4 };
        let pawn_key = pawn_position.get_key().unwrap();
        let king = Piece::new(Color::Black, King, Position { row: 3, col: 3 });
        let pawn = Piece::new(Color::Black, Pawn, pawn_position);
        let board = Board {
            pieces: vec![king, pawn],
            show_board_flipped: true,
        };
        let power_map = board.calculate_power_map(Color::Black);
        println!("{:?}", power_map);
        assert_eq!(
            power_map.get(pawn_key.as_str()).unwrap().contains(&King),
            true
        );
        Ok(())
    }

    const default_power_black: &str = "\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ♞ ♟ ,♟ ,♞ ♟ ,♟ ,♟ ,♞ ♟ ,♟ ,♞ ,\r\n\
        ♜ ,♝ ,♛ ,♞ ♝ ♛ ♚ ,♛ ♚ ♝ ♞ ,♚ ,♝ ,♜ ,\r\n\
        ♟ ,♜ ♟ ,♛ ♟ ,♚ ♟ ,♛ ♟ ,♚ ♟ ,♜ ♟ ,  ,\r\n";

    // todo bugs in these, these are not desired snapshots
    const default_power_white: &str = "\
        ,♖ ♙ ,♕ ♙ ,♔ ♙ ,♕ ♙ ,♔ ♙ ,♖ ♙ ,♙ ,\r\n\
        ♖ ,♗ ,♕ ,♘ ♗ ♕ ♔ ,♕ ♔ ♗ ♘ ,♔ ,♗ ,♖ ,\r\n\
        ♘ ,♙ ,♘ ♙ ,♙ ,♙ ,♘ ♙ ,♙ ,♘ ♙ ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n\
        ,  ,  ,  ,  ,  ,  ,  ,\r\n";

    #[test]
    fn test_default_power_map() {
        let board = Board::default();
        assert_eq!(board.print_power_map(Color::White), default_power_white);
        assert_eq!(board.print_power_map(Color::Black), default_power_black);
    }

    // todo: this is sort of an integration test, improve the test plan
    #[test]
    fn test_get_valid_moves() -> Result<(), String> {
        let king = Piece::new(Color::Black, King, Position { row: 3, col: 3 });
        let pawn = Piece::new(Color::Black, Pawn, Position { row: 3, col: 4 });
        let board = Board {
            pieces: vec![king, pawn],
            show_board_flipped: true,
        };
        let valid_moves = board.get_valid_moves(pawn);
        println!("{:?}", valid_moves);
        Ok(())
    }

    const DEFAULT_BOARD: &str = "\
        ―――――――――――――――――――――――――――――――――\r\n\
        |·♖·| ♘ |·♗·| ♕ |·♔·| ♗ |·♘·| ♖ |\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        | ♙ |·♙·| ♙ |·♙·| ♙ |·♙·| ♙ |·♙·|\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        |···|   |···|   |···|   |···|   |\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        |   |···|   |···|   |···|   |···|\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        |···|   |···|   |···|   |···|   |\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        |   |···|   |···|   |···|   |···|\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        |·♟·| ♟ |·♟·| ♟ |·♟·| ♟ |·♟·| ♟ |\r\n\
        ―――――――――――――――――――――――――――――――――\r\n\
        | ♜ |·♞·| ♝ |·♛·| ♚ |·♝·| ♞ |·♜·|\r\n\
        ―――――――――――――――――――――――――――――――――\r\n";

    #[test]
    fn test_display() {
        let board = Board::default();
        assert_eq!(board.to_string(), DEFAULT_BOARD);
    }
}
