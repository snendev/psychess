cd "$(dirname "$0")"

cd ../..
cargo build

cd ./wasm
rustwasmc build --target web --out-dir ../web/app/src/chess/wasm ./
