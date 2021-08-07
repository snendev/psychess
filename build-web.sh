cargo build

cd ./web/wasm-chess
rustwasmc build --no-wasi --target deno --out-dir ../server/wasm-chess/pkg ./
cd ..
cp -r ./server/wasm-chess/pkg ./aleph-test/api/game/
mv ./aleph-test/api/game/pkg ./aleph-test/api/game/chess
cd ..

cd ./web/aleph-test
# alephjs dev --reload
