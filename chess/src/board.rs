use std::collections::HashMap;
use std::convert::TryFrom;

use crate::{
    piece::{
        self, Color, Piece,
        PieceType::{self, Bishop, King, Knight, Pawn, Queen, Rook},
    },
    position::{Position, squares},
};

// enum BoardResult {
//     IllegalMove,
//     Continue,
//     Draw,
//     Victory(Color),
// }

// TODO: this is a controller concern, not a "core" concern, right?
// enum BoardOffer {
//     Draw,
//     Resign,
//     Takeback,
// }

pub type PowerMap = HashMap<String, Vec<PieceType>>;

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

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub struct BoardPiece {
    pub piece: Piece,
    // the starting position of the piece is used as a uid
    // this is because it is guaranteed to be unique
    origin: Position,
}

impl BoardPiece {
    pub fn new(piece: Piece, origin: Position) -> Self {
        BoardPiece { piece, origin }
    }
}

impl std::fmt::Display for BoardPiece {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let target = String::try_from(self.origin).unwrap_or_else(|_| "?".to_string());
        write!(f, "{}({})", char::from(&self.piece), target)
    }
}

pub struct Board {
    pieces: Vec<BoardPiece>,
    // map from piece keys (BoardPieces) to current location
    squares: HashMap<BoardPiece, Position>,
}

impl Board {
    pub fn new(pieces: Vec<BoardPiece>) -> Self {
        Board {
            squares: pieces
                .clone()
                .iter()
                .map(|p| (*p, p.origin))
                .collect(),
            pieces,
        }
    }

    pub fn get_piece_at_position(&self, square: Position) -> Option<BoardPiece> {
        self.pieces.clone().into_iter().find(|piece| {
            *self.squares.get(piece).unwrap_or(&squares::ZERO) == square
        })
    }

    pub fn get_pieces_of_color(&self, color: Color) -> Vec<BoardPiece> {
        self.pieces
            .clone()
            .into_iter()
            .filter(|&piece| piece.piece.get_color() == color)
            .collect()
    }

    pub fn get_valid_targets(&self, piece: &BoardPiece) -> Vec<Position> {
        // for each piece
        // get piece position
        // powers available at position
        // yield moves for each Pos1,Pos2 tuple
        let origin = self.get_piece_position(piece).unwrap();
        let color = piece.piece.get_color();
        let position_key = String::try_from(origin).unwrap_or_else(|_| "".to_string());

        let powers = self.calculate_power_map(color);
        let piece_powers = powers.get(position_key.as_str());

        if let Some(powers) = piece_powers {
            let mut moves: Vec<Position> = vec![];
            for &power in powers {
                let mut target_squares: Vec<Position> = match power {
                    // todo: en passent
                    Pawn => self.get_pawn_moves(origin, color),
                    Knight => self.get_knight_moves(origin, color),
                    // cannot capture your own pieces
                    Bishop => self.get_bishop_moves(origin, color, false),
                    Rook => self.get_rook_moves(origin, color, false),
                    Queen => self.get_queen_moves(origin, color, false),
                    // todo: castling
                    King => {
                        origin
                            .get_king_targets()
                            .into_iter()
                            .filter(|&target| {
                                // filter out if any piece on my team is in the way
                                !self.pieces.clone().into_iter().any(|collider| {
                                    let is_target =
                                        self.get_piece_position(&collider).unwrap() == target;
                                    collider.piece.is_ally(color) && is_target
                                })
                            })
                            .collect()
                    }
                };
                moves.append(&mut target_squares);
            }
            moves
        } else {
            vec![]
        }
    }

    pub fn place_piece(&mut self, piece: BoardPiece, target: Position) -> Option<BoardPiece> {
        if self.get_piece_at_position(target).is_none() {
            self.pieces.push(piece);
            self.squares.insert(piece, target);
            Some(piece)
        } else {
            None
        }
    }

    pub fn move_piece(&mut self, piece: &BoardPiece, target: Position) -> Option<BoardPiece> {
        let captured_piece = &self.get_piece_at_position(target);

        // if a piece is about to be captured, clean it up first
        if let Some(captured_piece) = captured_piece {
            let captured_index = self
                .pieces
                .iter()
                .position(|p| self.get_piece_position(p).unwrap() == target);
            self.squares.remove(captured_piece);
            if let Some(i) = captured_index {
                self.pieces.remove(i);
            }
        }

        // set the new piece square
        self.squares.insert(*piece, target);

        *captured_piece
    }

    pub fn render(&self) -> [Option<Piece>; 64] {
        let mut board_map: [Option<Piece>; 64] = [None; 64];

        for piece in &self.pieces {
            let position = self.get_piece_position(piece).unwrap();
            // in order from top to bottom, the row on which to display the piece
            // if show_board_flipped, A1 appears in the top right corner
            let index = i32::try_from(position).unwrap() as usize;
            board_map[index] = Some(piece.piece);
        }
        board_map
    }

    fn get_piece_position(&self, piece: &BoardPiece) -> Option<Position> {
        self.squares.get(piece).copied()
    }

    fn is_available_square(&self, square: Position, color: Option<Color>) -> bool {
        !self.pieces.clone().into_iter().any(|piece| {
            let would_piece_block = if let Some(color) = color {
                piece.piece.is_ally(color)
            } else {
                true
            };
            let is_occupying_square = self.get_piece_position(&piece).unwrap() == square;
            would_piece_block && is_occupying_square
        })
    }

    fn is_capture_square(&self, square: Position, color: Color) -> bool {
        self.pieces.clone().into_iter().any(|piece| {
            if piece.piece.is_ally(color) {
                return false
            }
            self.get_piece_position(&piece).unwrap() == square
        })
    }

    fn get_pawn_moves(&self, origin: Position, color: Color) -> Vec<Position> {
        let mut target_squares = vec![];
        // TODO: distinguish my_color collision_squares from can_capture squares?
        let mut move_squares = origin
            .get_pawn_move_targets(color)
            .into_iter()
            .filter(|&square| self.is_available_square(square, None))
            .collect();
        target_squares.append(&mut move_squares);

        let mut attack_squares = origin
            .get_pawn_attack_targets(color)
            .into_iter()
            .filter(|&square| self.is_capture_square(square, color))
            .collect();
        target_squares.append(&mut attack_squares);
        target_squares
    }

    fn get_knight_moves(&self, origin: Position, color: Color) -> Vec<Position> {
        origin
            .get_knight_targets()
            .into_iter()
            .filter(|&square| self.is_available_square(square, Some(color)))
            .collect()
    }

    // TODO: a simpler api would remove can_target_allies in favor of filtering out allied positions from moves
    // (since otherwise they are "seeing" the piece and should be returned)
    // see whether this is doable
    fn walk_line(
        &self,
        origin: Position,
        color: Color,
        direction: Position,
        can_target_allies: bool,
    ) -> Vec<Position> {
        let mut moves = vec![];
        let mut current_square = origin + direction;
        let mut blocking_piece: Option<BoardPiece> = self.get_piece_at_position(current_square);
        while !current_square.is_off_board() && blocking_piece.is_none() {
            moves.push(current_square);
            current_square = current_square + direction;
            blocking_piece = self.get_piece_at_position(current_square);
        }
        if let Some(other_piece) = blocking_piece {
            if can_target_allies || !other_piece.piece.is_ally(color) {
                moves.push(current_square);
            }
        }
        moves
    }

    fn get_bishop_moves(
        &self,
        origin: Position,
        color: Color,
        can_target_allies: bool,
    ) -> Vec<Position> {
        let mut moves = vec![];
        // four directions to walk
        for &direction in BISHOP_DIRECTIONS.iter() {
            moves.extend(self.walk_line(origin, color, direction, can_target_allies));
        }
        moves
    }

    fn get_rook_moves(
        &self,
        origin: Position,
        color: Color,
        can_target_allies: bool,
    ) -> Vec<Position> {
        let mut moves = vec![];
        for &direction in ROOK_DIRECTIONS.iter() {
            moves.extend(self.walk_line(origin, color, direction, can_target_allies));
        }
        moves
    }

    fn get_queen_moves(
        &self,
        origin: Position,
        color: Color,
        can_target_allies: bool,
    ) -> Vec<Position> {
        let mut moves = self.get_bishop_moves(origin, color, can_target_allies);
        let orthogonal_moves = self.get_rook_moves(origin, color, can_target_allies);
        moves.extend(orthogonal_moves);
        moves
    }

    pub fn calculate_power_map(&self, color: Color) -> PowerMap {
        let mut power_map = PowerMap::new();

        let mut push_targets = |piece_type: PieceType, targets: Vec<Position>| {
            for target in targets {
                let key = String::try_from(target);
                if let Ok(key) = key {
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
            let piece_color = piece.piece.get_color();
            if piece_color == color {
                let piece_type = piece.piece.get_type();
                let origin = self.get_piece_position(&piece).unwrap();
                let targets = match piece_type {
                    Pawn => origin.get_pawn_attack_targets(color),
                    Knight => origin.get_knight_targets(),
                    // powers do
                    Bishop => self.get_bishop_moves(origin, piece_color, true),
                    Rook => self.get_rook_moves(origin, piece_color, true),
                    Queen => self.get_queen_moves(origin, piece_color, true),
                    King => origin.get_king_targets(),
                };
                push_targets(piece_type, targets);
            }
        }
        power_map
    }
}

impl Default for Board {
    fn default() -> Board {
        let pieces = vec![
            // white pieces
            BoardPiece::new(piece::WHITE_ROOK, squares::A1),
            BoardPiece::new(piece::WHITE_KNIGHT, squares::B1),
            BoardPiece::new(piece::WHITE_BISHOP, squares::C1),
            BoardPiece::new(piece::WHITE_QUEEN, squares::D1),
            BoardPiece::new(piece::WHITE_KING, squares::E1),
            BoardPiece::new(piece::WHITE_BISHOP, squares::F1),
            BoardPiece::new(piece::WHITE_KNIGHT, squares::G1),
            BoardPiece::new(piece::WHITE_ROOK, squares::H1),
            BoardPiece::new(piece::WHITE_PAWN, squares::A2),
            BoardPiece::new(piece::WHITE_PAWN, squares::B2),
            BoardPiece::new(piece::WHITE_PAWN, squares::C2),
            BoardPiece::new(piece::WHITE_PAWN, squares::D2),
            BoardPiece::new(piece::WHITE_PAWN, squares::E2),
            BoardPiece::new(piece::WHITE_PAWN, squares::F2),
            BoardPiece::new(piece::WHITE_PAWN, squares::G2),
            BoardPiece::new(piece::WHITE_PAWN, squares::H2),
            // black pieces
            BoardPiece::new(piece::BLACK_ROOK, squares::A8),
            BoardPiece::new(piece::BLACK_KNIGHT, squares::B8),
            BoardPiece::new(piece::BLACK_BISHOP, squares::C8),
            BoardPiece::new(piece::BLACK_QUEEN, squares::D8),
            BoardPiece::new(piece::BLACK_KING, squares::E8),
            BoardPiece::new(piece::BLACK_BISHOP, squares::F8),
            BoardPiece::new(piece::BLACK_KNIGHT, squares::G8),
            BoardPiece::new(piece::BLACK_ROOK, squares::H8),
            BoardPiece::new(piece::BLACK_PAWN, squares::A7),
            BoardPiece::new(piece::BLACK_PAWN, squares::B7),
            BoardPiece::new(piece::BLACK_PAWN, squares::C7),
            BoardPiece::new(piece::BLACK_PAWN, squares::D7),
            BoardPiece::new(piece::BLACK_PAWN, squares::E7),
            BoardPiece::new(piece::BLACK_PAWN, squares::F7),
            BoardPiece::new(piece::BLACK_PAWN, squares::G7),
            BoardPiece::new(piece::BLACK_PAWN, squares::H7),
        ];
        Board::new(pieces)
    }
}

impl Board {
    pub fn init_variant() -> Self {
        let pieces = vec![
            // white pieces
            BoardPiece::new(piece::WHITE_ROOK, squares::A1),
            BoardPiece::new(piece::WHITE_BISHOP, squares::C1),
            BoardPiece::new(piece::WHITE_QUEEN, squares::D1),
            BoardPiece::new(piece::WHITE_KING, squares::E1),
            BoardPiece::new(piece::WHITE_BISHOP, squares::F1),
            BoardPiece::new(piece::WHITE_ROOK, squares::H1),
            BoardPiece::new(piece::WHITE_KNIGHT, squares::D2),
            BoardPiece::new(piece::WHITE_KNIGHT, squares::E2),
            BoardPiece::new(piece::WHITE_PAWN, squares::A2),
            BoardPiece::new(piece::WHITE_PAWN, squares::B2),
            BoardPiece::new(piece::WHITE_PAWN, squares::C2),
            BoardPiece::new(piece::WHITE_PAWN, squares::D3),
            BoardPiece::new(piece::WHITE_PAWN, squares::E3),
            BoardPiece::new(piece::WHITE_PAWN, squares::F2),
            BoardPiece::new(piece::WHITE_PAWN, squares::G2),
            BoardPiece::new(piece::WHITE_PAWN, squares::H2),
            // black pieces
            BoardPiece::new(piece::BLACK_ROOK, squares::A8),
            BoardPiece::new(piece::BLACK_BISHOP, squares::C8),
            BoardPiece::new(piece::BLACK_QUEEN, squares::D8),
            BoardPiece::new(piece::BLACK_KING, squares::E8),
            BoardPiece::new(piece::BLACK_BISHOP, squares::F8),
            BoardPiece::new(piece::BLACK_ROOK, squares::H8),
            BoardPiece::new(piece::BLACK_KNIGHT, squares::D7),
            BoardPiece::new(piece::BLACK_KNIGHT, squares::E7),
            BoardPiece::new(piece::BLACK_PAWN, squares::A7),
            BoardPiece::new(piece::BLACK_PAWN, squares::B7),
            BoardPiece::new(piece::BLACK_PAWN, squares::C7),
            BoardPiece::new(piece::BLACK_PAWN, squares::D6),
            BoardPiece::new(piece::BLACK_PAWN, squares::E6),
            BoardPiece::new(piece::BLACK_PAWN, squares::F7),
            BoardPiece::new(piece::BLACK_PAWN, squares::G7),
            BoardPiece::new(piece::BLACK_PAWN, squares::H7),
        ];
        Board::new(pieces)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_render() -> Result<(), String> {
        let board = Board::default();
        let rendered_board = board.render();
        println!("{:?}", rendered_board[0..32].to_vec());
        println!("{:?}", rendered_board[32..64].to_vec());

        assert_eq!(true, false);
        Ok(())
    }

    #[test]
    fn test_calculate_power_map() -> Result<(), String> {
        let pawn_position = Position { row: 3, col: 4 };
        let pawn_key = String::try_from(pawn_position).unwrap();
        let king = BoardPiece::new(piece::BLACK_KING, Position { row: 3, col: 3 });
        let pawn = BoardPiece::new(piece::BLACK_PAWN, pawn_position);
        let board = Board::new(vec![king, pawn]);
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
        // let board = Board::default();
        // assert_eq!(board.print_power_map(Color::White), default_power_white);
        // assert_eq!(board.print_power_map(Color::Black), default_power_black);
    }

    // todo: this is sort of an integration test, improve the test plan
    #[test]
    fn test_get_valid_moves() -> Result<(), String> {
        // let king = Piece::new(Color::Black, King, Position { row: 3, col: 3 });
        // let pawn = Piece::new(Color::Black, Pawn, Position { row: 3, col: 4 });
        // let board = Board {
        //     pieces: vec![king, pawn],
        //     show_board_flipped: true,
        // };
        // let valid_moves = board.get_valid_moves(pawn);
        // println!("{:?}", valid_moves);
        Ok(())
    }
}
