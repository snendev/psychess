extern crate windows;

fn main() {
    windows::build!(
        Windows::Data::Xml::Dom::*,
        Windows::Win32::WindowsProgramming::CloseHandle,
        Windows::Win32::WindowsAndMessaging::MessageBoxA,
        Windows::Win32::SystemServices::{
            CreateEventW, SetEvent, WaitForSingleObject
        },
    );
}
