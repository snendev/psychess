cd ~/grovest/chessvariant
cargo build

cd ./web/wasm-chess
rustwasmc build --no-wasi --target deno --out-dir ../app/api/game/wasm ./
cd ..

cd ./app
deno run --allow-read --allow-write build.ts

# reload files for an initial build
rm -rf .aleph
alephjs dev

## server will eventually terminate via error
## if not, issue SIGTERM and run next lines manually
# adjust build to work
deno run --allow-read --allow-write postreload.ts development

alephjs dev
