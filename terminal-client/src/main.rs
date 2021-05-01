use std::io::{stdin, stdout, Write};
use rand::distributions::{Distribution, Uniform};
use termion::{
    event::{Event, Key, MouseEvent},
    input::{MouseTerminal, TermRead},
    raw::{IntoRawMode},
    screen::*,
};
use bojanchess::{
    GameState, Color, WHITE_KING, BLACK_KING
};

mod display;

use display::{get_board_character, get_position, MAX_PX, PX_PER_CELL};


const WELCOME_TEXT: &str = "Welcome! To start, enter one of the following keys:\r\n\
1 - Play as the White pieces\r\n\
2 - Play as the Black pieces\r\n\
3 - Play as a random side\r\n\
q - Exit\r\n";

fn input_player_color(out: &mut impl Write) -> Option<Color> {
    let stdin = stdin();
    write!(
        out,
        "{}{}{}{}",
        termion::clear::All,
        termion::cursor::Goto(1, 1),
        WELCOME_TEXT,
        termion::cursor::Hide,
    ).unwrap();

    let mut player_color: Option<Color> = None;

    for keypress in stdin.events() {
        let event = keypress.unwrap();
        match event {
            Event::Key(Key::Char('q')) => return None,
            Event::Key(Key::Char('1')) => {
                player_color = Some(Color::White);
                break;
            }
            Event::Key(Key::Char('2')) => {
                player_color = Some(Color::Black);
                break;
            }
            Event::Key(Key::Char('3')) => {
                player_color = Some(Color::White);
                break;
            }
            _ => {}
        }
        out.flush().unwrap();
    }

    if let Some(color) = player_color {
        Some(color)
    } else {
        let mut rng = rand::thread_rng();
        let coin = Uniform::from(0..2);
        let coinflip = coin.sample(&mut rng);
        if coinflip == 0 {
            Some(Color::White)
        } else {
            Some(Color::Black)
        }
    }
}

struct TerminalClient(GameState);

fn render_board(out: &mut impl Write, game_state: &TerminalClient, player_color: Color) {
    let turn_color = game_state.0.get_turn_color();
    let king_piece = if turn_color == Color::White {
        WHITE_KING.get_character()
    } else {
        BLACK_KING.get_character()
    };
    let enemy_color = !player_color;
    write!(
        out,
        "{}{}\
        {} pieces\r\n\
        {}\
        {} pieces\r\n\
        \r\n\r\n\
        {} to play. {}\
        {}",
        termion::clear::All,
        termion::cursor::Goto(1, 1),
        enemy_color,
        game_state,
        player_color,
        turn_color,
        king_piece,
        termion::cursor::Hide,
    )
    .unwrap();
    out.flush().unwrap();
}

fn main() {
    let mut out = AlternateScreen::from(
        MouseTerminal::from(
            stdout().into_raw_mode().unwrap()
        )
    );

    let player_color = input_player_color(&mut out);
    if player_color.is_none() {
        return
    }
    let player_color = player_color.unwrap();
    let show_board_flipped = if player_color == Color::White { false } else { true };
    let mut game = TerminalClient(GameState::default());

    let stdin = stdin();

    render_board(&mut out, &game, player_color);

    for keypress in stdin.events() {
        let event = keypress.unwrap();
        match event {
            Event::Key(Key::Char('q')) => return,
            Event::Mouse(mouse_event) => {
                if let MouseEvent::Press(_, x, y) = mouse_event {
                    let click_position = get_position(i32::from(x), i32::from(y));
                    let click_position = if show_board_flipped {
                        click_position.map(|position| position.flip().unwrap())
                    } else {
                        click_position
                    };
                    game.0.select_square(click_position);
                } else {
                    continue
                }
            }
            _ => {
                continue
            }
        }
        render_board(&mut out, &game, player_color);
        
        let game_result = game.0.get_result();
        eprintln!("[main]: {:?}", game_result);
        if let Some(result) = game_result {
            if let Some(winner) = result.winner {
                write!(
                    out,
                    "\r\n\r\n{} wins by {}!{}",
                    winner,
                    result.reason,
                    termion::cursor::Hide,
                ).unwrap();
            } else {
                write!(
                    out,
                    "\r\n\r\nDraw by {}!{}",
                    result.reason,
                    termion::cursor::Hide,
                ).unwrap();
            }
            out.flush().unwrap();
        } else {
        }
    }
}

impl std::fmt::Display for TerminalClient {
    // prints a chess board
    // each cell is 5-chars wide (including both edges):
    //      Border, Space/Dot, Piece/Space, Space/Dot, Border
    // the same is true for height
    // spaces indicates light squares, dots indicate dark squares
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        let board_map = self.0.get_board().render();

        let mut board_display = String::new();
        let grid_width = MAX_PX;
        let cell_width = PX_PER_CELL;
        let center_index = cell_width / 2;

        let selection = self.0.get_selection().as_ref();
        let highlight_squares = if let Some(selection) = selection {
            Some(selection.valid_moves.clone())
        } else {
            None
        };

        for y in 0..grid_width {
            let sub_row = y % cell_width;
            // draw pieces
            for x in 0..grid_width {
                let sub_col = x % cell_width;

                let character = if sub_row == center_index && sub_col == center_index {
                    let position = get_position(x, y).unwrap();

                    let index = position.get_index().unwrap();
                    let piece_character = match board_map[index] {
                        Some(piece) => Some(piece.get_character()),
                        None => get_board_character(x, y, highlight_squares.clone()),
                    };
                    piece_character.unwrap()
                } else {
                    get_board_character(x, y, highlight_squares.clone()).unwrap()
                };

                board_display.push(character);
            }

            // raw mode newline
            board_display.push('\r');
            board_display.push('\n');
        }
        write!(f, "{}", board_display)
    }
}
