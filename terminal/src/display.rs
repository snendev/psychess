use psychess::{Color, Piece, Position, PositionColor, PowerMap};
use std::convert::TryFrom;

const VBAR: char = '|';
const HBAR: char = '―';
const LIGHT_BG: char = '\u{2008}';
const DARK_BG: char = '\u{00B7}';
const HIGHLIGHT_BG: char = 'X';

// amount of units occupied inside the border of a square
const CELL_WIDTH: i32 = 3;
const BORDER_SIZE: i32 = 1;

pub const PX_PER_CELL: i32 = CELL_WIDTH + BORDER_SIZE;

// add border size, multiply by 8 sides; then add final border
pub const MAX_PX: i32 = PX_PER_CELL * 8 + BORDER_SIZE;

fn get_col(x: i32) -> Option<i32> {
    let value = (x - BORDER_SIZE) / PX_PER_CELL;
    if !(0..=7).contains(&value) {
        None
    } else {
        Some(value)
    }
}

fn get_row(y: i32) -> Option<i32> {
    get_col(y).map(|row| 7 - row)
}

pub fn get_position(x: i32, y: i32) -> Option<Position> {
    let row = get_row(y);
    let col = get_col(x);
    match (row, col) {
        (Some(row), Some(col)) => Some(Position { row, col }),
        (_, _) => None,
    }
}

pub fn get_board_character(x: i32, y: i32, highlights: Option<Vec<Position>>) -> Option<char> {
    let highlights: Vec<Position> = highlights.unwrap_or_default();

    let inner_cell_y = y % PX_PER_CELL;
    let inner_cell_x = x % PX_PER_CELL;
    match (inner_cell_y, inner_cell_x) {
        (0, _) => Some(HBAR),
        (_, 0) => Some(VBAR),
        _ => {
            let position = get_position(x, y);
            if let Some(position) = position {
                if highlights.contains(&position) {
                    Some(HIGHLIGHT_BG)
                } else {
                    match position.get_position_color() {
                        Some(PositionColor::Light) => Some(LIGHT_BG),
                        Some(PositionColor::Dark) => Some(DARK_BG),
                        None => None,
                    }
                }
            } else {
                None
            }
        }
    }
}

pub fn print_power_map(map: PowerMap, color: Color, show_board_flipped: bool) -> String {
    let mut grid = String::new();
    for i in 0..8 {
        for j in 0..8 {
            // TODO TEST FOR MIRRORED
            let position = Position { row: i, col: j };
            let position = if show_board_flipped {
                position.flip().unwrap()
            } else {
                position
            };
            let key = String::try_from(position).unwrap();
            let powers = map.get(&key);
            if let Some(powers) = powers {
                for power in powers {
                    let piece = Piece::new(color, *power);
                    grid.push(char::from(&piece));
                    grid.push(' ');
                }
                grid.push(',');
            } else {
                grid += "  ,";
            }
        }
        grid.push('\r');
        grid.push('\n');
    }
    grid
}
