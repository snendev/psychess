cd "$(dirname "$0")"

cd ../
cargo build

cd ./wasm
# https://github.com/rustwasm/wasm-pack/issues/672#issuecomment-813630435
wasm-pack build --target web --out-dir ../web/server/chess/wasm ./
wasm-pack build --target bundler --out-dir ../web/app/src/chess/wasm ./
cd ../web

cd ./app
npm i
npm run build
cd ..

cp -r ./app/build ./server/public

echo ""
echo "Build complete!"
echo "Run $ ./server/serve.sh to run the application."
