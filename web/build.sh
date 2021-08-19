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

# to avoid CSP issues
INLINE_RUNTIME_CHUNK=false npm run build

echo ""
echo "Build complete!"
echo "Run $ ./server/serve.sh to run the application."

cd ../server
GITHUB_SECRET=$GITHUB_SECRET LOG_LEVEL=debug deployctl run server.ts --no-check
