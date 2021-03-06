use std::convert::TryFrom;
use std::ops::{Add, Sub};

use crate::piece::Color;

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub struct Position {
    pub row: i32,
    pub col: i32,
}

pub enum PositionColor {
    Light,
    Dark,
}

pub mod squares {
    use super::*;

    pub const ZERO: Position = Position { row: -1, col: -1 };
    pub const A1: Position = Position { row: 0, col: 0 };
    pub const A2: Position = Position { row: 1, col: 0 };
    pub const A3: Position = Position { row: 2, col: 0 };
    pub const A4: Position = Position { row: 3, col: 0 };
    pub const A5: Position = Position { row: 4, col: 0 };
    pub const A6: Position = Position { row: 5, col: 0 };
    pub const A7: Position = Position { row: 6, col: 0 };
    pub const A8: Position = Position { row: 7, col: 0 };
    pub const B1: Position = Position { row: 0, col: 1 };
    pub const B2: Position = Position { row: 1, col: 1 };
    pub const B3: Position = Position { row: 2, col: 1 };
    pub const B4: Position = Position { row: 3, col: 1 };
    pub const B5: Position = Position { row: 4, col: 1 };
    pub const B6: Position = Position { row: 5, col: 1 };
    pub const B7: Position = Position { row: 6, col: 1 };
    pub const B8: Position = Position { row: 7, col: 1 };
    pub const C1: Position = Position { row: 0, col: 2 };
    pub const C2: Position = Position { row: 1, col: 2 };
    pub const C3: Position = Position { row: 2, col: 2 };
    pub const C4: Position = Position { row: 3, col: 2 };
    pub const C5: Position = Position { row: 4, col: 2 };
    pub const C6: Position = Position { row: 5, col: 2 };
    pub const C7: Position = Position { row: 6, col: 2 };
    pub const C8: Position = Position { row: 7, col: 2 };
    pub const D1: Position = Position { row: 0, col: 3 };
    pub const D2: Position = Position { row: 1, col: 3 };
    pub const D3: Position = Position { row: 2, col: 3 };
    pub const D4: Position = Position { row: 3, col: 3 };
    pub const D5: Position = Position { row: 4, col: 3 };
    pub const D6: Position = Position { row: 5, col: 3 };
    pub const D7: Position = Position { row: 6, col: 3 };
    pub const D8: Position = Position { row: 7, col: 3 };
    pub const E1: Position = Position { row: 0, col: 4 };
    pub const E2: Position = Position { row: 1, col: 4 };
    pub const E3: Position = Position { row: 2, col: 4 };
    pub const E4: Position = Position { row: 3, col: 4 };
    pub const E5: Position = Position { row: 4, col: 4 };
    pub const E6: Position = Position { row: 5, col: 4 };
    pub const E7: Position = Position { row: 6, col: 4 };
    pub const E8: Position = Position { row: 7, col: 4 };
    pub const F1: Position = Position { row: 0, col: 5 };
    pub const F2: Position = Position { row: 1, col: 5 };
    pub const F3: Position = Position { row: 2, col: 5 };
    pub const F4: Position = Position { row: 3, col: 5 };
    pub const F5: Position = Position { row: 4, col: 5 };
    pub const F6: Position = Position { row: 5, col: 5 };
    pub const F7: Position = Position { row: 6, col: 5 };
    pub const F8: Position = Position { row: 7, col: 5 };
    pub const G1: Position = Position { row: 0, col: 6 };
    pub const G2: Position = Position { row: 1, col: 6 };
    pub const G3: Position = Position { row: 2, col: 6 };
    pub const G4: Position = Position { row: 3, col: 6 };
    pub const G5: Position = Position { row: 4, col: 6 };
    pub const G6: Position = Position { row: 5, col: 6 };
    pub const G7: Position = Position { row: 6, col: 6 };
    pub const G8: Position = Position { row: 7, col: 6 };
    pub const H1: Position = Position { row: 0, col: 7 };
    pub const H2: Position = Position { row: 1, col: 7 };
    pub const H3: Position = Position { row: 2, col: 7 };
    pub const H4: Position = Position { row: 3, col: 7 };
    pub const H5: Position = Position { row: 4, col: 7 };
    pub const H6: Position = Position { row: 5, col: 7 };
    pub const H7: Position = Position { row: 6, col: 7 };
    pub const H8: Position = Position { row: 7, col: 7 };
}

impl Add for Position {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Self {
            row: self.row + other.row,
            col: self.col + other.col,
        }
    }
}

impl Sub for Position {
    type Output = Self;

    fn sub(self, other: Self) -> Self {
        Self {
            row: self.row - other.row,
            col: self.col - other.col,
        }
    }
}

impl Position {
    pub fn flip(self) -> Result<Position, String> {
        if self.is_off_board() {
            let msg = format!("Invalid position: row {} col {}", self.row, self.col);
            Err(msg)
        } else {
            Ok(Position {
                row: 7 - self.row,
                col: 7 - self.col,
            })
        }
    }

    pub fn is_off_board(&self) -> bool {
        self.row < 0 || self.row > 7 || self.col < 0 || self.col > 7
    }

    pub fn get_position_color(&self) -> Option<PositionColor> {
        match (self.col + self.row) % 2 {
            0 => Some(PositionColor::Dark),
            1 => Some(PositionColor::Light),
            _ => None,
        }
    }

    pub fn get_pawn_move_targets(self, color: Color) -> Vec<Position> {
        let double_move_row = if color == Color::White { 1 } else { 6 };
        let board_direction = if color == Color::White { 1 } else { -1 };
        let delta = Position {
            row: board_direction,
            col: 0,
        };
        let first_square = self + delta;
        let second_square = if self.row == double_move_row {
            Some(self + delta + delta)
        } else {
            None
        };
        let squares = if let Some(second_square) = second_square {
            vec![first_square, second_square]
        } else {
            vec![first_square]
        };
        squares
            .into_iter()
            .filter(|square| !square.is_off_board())
            .collect()
    }

    pub fn get_pawn_attack_targets(self, color: Color) -> Vec<Position> {
        let board_direction = if color == Color::White { 1 } else { -1 };
        let potential_squares = vec![
            self + Position {
                row: board_direction,
                col: 1,
            },
            self + Position {
                row: board_direction,
                col: -1,
            },
        ];
        potential_squares
            .into_iter()
            .filter(|square| !square.is_off_board())
            .collect()
    }

    pub fn get_knight_targets(self) -> Vec<Position> {
        let potential_squares = vec![
            self + Position { row: 2, col: 1 },
            self + Position { row: 1, col: 2 },
            self + Position { row: -1, col: 2 },
            self + Position { row: -2, col: 1 },
            self + Position { row: -2, col: -1 },
            self + Position { row: -1, col: -2 },
            self + Position { row: 1, col: -2 },
            self + Position { row: 2, col: -1 },
        ];
        potential_squares
            .into_iter()
            .filter(|square| !square.is_off_board())
            .collect()
    }

    pub fn get_king_targets(self) -> Vec<Position> {
        let potential_squares = vec![
            self + Position { row: 0, col: 1 },
            self + Position { row: 1, col: 1 },
            self + Position { row: 1, col: 0 },
            self + Position { row: 1, col: -1 },
            self + Position { row: 0, col: -1 },
            self + Position { row: -1, col: -1 },
            self + Position { row: -1, col: 0 },
            self + Position { row: -1, col: 1 },
        ];
        potential_squares
            .into_iter()
            .filter(|square| !square.is_off_board())
            .collect()
    }

    pub fn get_file_char(self) -> Option<char> {
        match self.col {
            0 => Some('a'),
            1 => Some('b'),
            2 => Some('c'),
            3 => Some('d'),
            4 => Some('e'),
            5 => Some('f'),
            6 => Some('g'),
            7 => Some('h'),
            _ => None,
        }
    }
}

impl From<i32> for Position {
    fn from(value: i32) -> Self {
        let col = value % 8;
        let row = value / 8;
        Position { row, col }
    }
}

impl TryFrom<Position> for i32 {
    type Error = String;

    fn try_from(position: Position) -> Result<Self, Self::Error> {
        if position.is_off_board() {
            let msg = format!(
                "Invalid position: row {} col {}",
                position.row, position.col
            );
            Err(msg)
        } else {
            Ok(position.row * 8 + position.col)
        }
    }
}

impl TryFrom<Position> for String {
    type Error = ();

    fn try_from(position: Position) -> Result<Self, Self::Error> {
        let file = position.get_file_char();
        if let Some(file) = file {
            if 0 > position.row || position.row > 7 {
                Err(())
            } else {
                Ok(format!("{}{}", file, position.row + 1))
            }
        } else {
            Err(())
        }
    }
}

impl TryFrom<String> for Position {
    type Error = String;

    fn try_from(pgn: String) -> Result<Self, Self::Error> {
        if pgn.len() > 1 {
            return Err(format!("invalid pgn `{}`", pgn));
        }
        let normalized_pgn = pgn.trim().to_lowercase();
        let mut characters = normalized_pgn.chars();
        let file = characters.next();
        let filenum = match file {
            Some('a') => Ok(0),
            Some('b') => Ok(1),
            Some('c') => Ok(2),
            Some('d') => Ok(3),
            Some('e') => Ok(4),
            Some('f') => Ok(5),
            Some('g') => Ok(6),
            Some('h') => Ok(7),
            Some(x) => Err(format!("invalid column character `{}`", x)),
            None => Err("incorrect format".to_string()),
        }?;

        let rank = characters.next().unwrap_or('0').to_string().parse::<i32>();

        match rank {
            Ok(row) => {
                let position = Position { row, col: filenum };
                if !position.is_off_board() {
                    Ok(position)
                } else {
                    Err(format!("invalid rank number `{}`", row))
                }
            }
            Err(error) => Err(error.to_string()),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use squares::*;

    #[test]
    fn test_is_off_board() {
        // known positions are on board
        assert_eq!(A6.is_off_board(), false);
        assert_eq!(B2.is_off_board(), false);
        assert_eq!(C5.is_off_board(), false);

        // other ones are not
        let off_board_position_bottom = Position { row: 0, col: 0 };
        assert!(off_board_position_bottom.is_off_board());

        let off_board_position_top = Position { row: 10, col: 3 };
        assert!(off_board_position_top.is_off_board());

        let off_board_position_left = Position { row: 3, col: 0 };
        assert!(off_board_position_left.is_off_board());

        let off_board_position_right = Position { row: 9, col: 0 };
        assert!(off_board_position_right.is_off_board());
    }

    #[test]
    fn test_get_key() {
        assert_eq!(String::try_from(A1), Some("a1".to_string()));
        assert_eq!(String::try_from(B2), Some("b2".to_string()));
        assert_eq!(String::try_from(C3), Some("c3".to_string()));
        assert_eq!(String::try_from(D4), Some("d4".to_string()));
        assert_eq!(String::try_from(E5), Some("e5".to_string()));
        assert_eq!(String::try_from(F6), Some("f6".to_string()));
        assert_eq!(String::try_from(G7), Some("g7".to_string()));
        assert_eq!(String::try_from(H8), Some("h8".to_string()));
    }

    #[test]
    fn test_from_key() {
        // test simple, lowercase pgn inputs
        let position_a6 = Position::try_from("a6".to_string());
        assert_eq!(position_a6, Ok(A6));

        let position_b2 = Position::try_from("b2".to_string());
        assert_eq!(position_b2, Ok(B2));

        // test uppercase inputs
        let position_h8 = Position::try_from("H8".to_string());
        assert_eq!(position_h8, Ok(H8));

        let position_g1 = Position::try_from("G1".to_string());
        assert_eq!(position_g1, Ok(G1));

        // test out-of-bounds inputs
        let position_oob_file = Position::try_from("m3".to_string());
        println!("{:?}", position_oob_file);
        assert_eq!(position_oob_file.is_err(), true);

        let position_oob_rank_1 = Position::try_from("a0".to_string());
        println!("{:?}", position_oob_rank_1);
        assert_eq!(position_oob_rank_1.is_err(), true);

        let position_oob_rank_2 = Position::try_from("a10".to_string());
        println!("{:?}", position_oob_rank_2);
        assert_eq!(position_oob_rank_2.is_err(), true);
    }
}
