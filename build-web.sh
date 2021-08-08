cd ~/grovest/chessvariant
cargo build

cd ./web/wasm-chess
rustwasmc build --no-wasi --target deno --out-dir ../aleph-test/api/game/wasm ./
cd ..

cd ./aleph-test
deno run --allow-read --allow-write build.ts

# reload files for an initial build
alephjs dev --reload

# server will eventually terminate via error

# adjust build to work
deno run --allow-read --allow-write postreload.ts development

alephjs dev
