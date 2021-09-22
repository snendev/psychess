cd "$(dirname "$0")"
cd ../terminal

cargo run 2> logs/stderr.log
