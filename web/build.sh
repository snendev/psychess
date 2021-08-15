cd "$(dirname "$0")"

cd ../
cargo build

cd ./wasm
rustwasmc build --no-wasi --target deno --out-dir ../web/server/chess/wasm ./
rustwasmc build --no-wasi --target web --out-dir ../web/app/src/chess/wasm ./
cd ..

cd ./web/app
npm run build
cd ..

cp -r ./app/dist ./server/web

echo "Run $ ./server/serve.sh to run the application."
