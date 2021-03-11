use termion::event::{Key, Event, MouseEvent};
use termion::input::{TermRead, MouseTerminal};
use termion::raw::IntoRawMode;
use std::io::{Write, stdout, stdin};
use rand::distributions::{Distribution, Uniform};

pub mod board;
pub mod color;
pub mod piece;
pub mod position;

mod game;

use color::Color;
use game::Game;

const WELCOME_TEXT: &str = "Welcome! To start, enter one of the following keys:\r\n\
1 - Play as the White pieces\r\n\
2 - Play as the Black pieces\r\n\
3 - Play as a random side\r\n\
q - Exit\r\n";

fn input_game_configuration() -> Option<Game> {
    let stdin = stdin();
    let mut stdout = MouseTerminal::from(stdout().into_raw_mode().unwrap());
    write!(stdout, "{}{}", termion::clear::All, WELCOME_TEXT).unwrap();

    let mut player_color: Option<Color> = None;

    for keypress in stdin.events() {
        let event = keypress.unwrap();
        match event {
            Event::Key(Key::Char('q')) => return None,
            Event::Key(Key::Char('1')) => {
                player_color = Some(color::Color::White);
                break;
            },
            Event::Key(Key::Char('2')) => {
                player_color = Some(color::Color::Black);
                break;
            },
            Event::Key(Key::Char('3')) => {
                player_color = Some(color::Color::White);
                break;
            },
            _ => {},
        }
        stdout.flush().unwrap();
    }

    let player_color = if let Some(color) = player_color {
        color
    } else {
        let mut rng = rand::thread_rng();
        let coin = Uniform::from(0..2);
        let coinflip = coin.sample(&mut rng);
        if coinflip == 0 { Color::White } else { Color::Black } 
    };
    let game = Game::new(player_color);
    Some(game)
}

fn main() {
    let game = input_game_configuration();
    if game.is_none() { return }
    let game = game.unwrap();

    let stdin = stdin();
    let mut stdout = MouseTerminal::from(stdout().into_raw_mode().unwrap());
    write!(stdout, "{}{}", termion::clear::All, game).unwrap();
    stdout.flush().unwrap();

    for keypress in stdin.events() {
        let event = keypress.unwrap();
        match event {
            Event::Key(Key::Char('q')) => return,
            Event::Mouse(mouse_event) =>  {
                if let MouseEvent::Press(_, x, y) = mouse_event {
                    write!(
                        stdout,
                        "{}{}{}",
                        termion::clear::All,
                        game,
                        termion::cursor::Goto(x, y)
                    ).unwrap();
                }
            }
            _ => {}
        }
        stdout.flush().unwrap();
    }
}
