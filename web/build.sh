cd "$(dirname "$0")"

cd ../
cargo build

cd ./wasm
./build.sh
cd ..

cd ./web/app
./build.sh
cd ../..

echo ""
echo "Build complete!"
echo "Run $ ./server/serve.sh to run the application."

cd ./web/server
./serve.sh
