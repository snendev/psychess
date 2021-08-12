cd "$(dirname "$0")"

cd ../..
cargo build

cd ./wasm
rustwasmc build --no-wasi --target deno --out-dir ../web/server/chess/wasm ./
