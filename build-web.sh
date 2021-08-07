cargo build

cd ./web/wasm-chess
rustwasmc build --no-wasi --target deno --out-dir ../server/wasm-chess/pkg ./
cd ..
cp -r ./server/wasm-chess/pkg ./aleph-test/api/game/
rm -rf ./aleph-test/api/game/chess
mv ./aleph-test/api/game/pkg ./aleph-test/api/game/chess
cd ..

cd ./web/aleph-test

### run deno run --allow-read --allow-write build.ts
### go into ./.aleph/development/api/game/chess/wasm_chess.js#L100, file path leading "/" needs to be removed

# alephjs dev --reload
