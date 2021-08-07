cargo build

cd ./web/wasm-chess
npx rustwasmc build --target deno --out-dir ../server/wasm-chess/pkg ./
cd ..
cp -r ./server/wasm-chess/pkg ./aleph-test/lib/
mv ./aleph-test/lib/pkg ./aleph-test/lib/chess
cd ..

cd ./web/aleph-test
alephjs dev --reload
