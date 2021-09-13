cd "$(dirname "$0")"

# https://github.com/rustwasm/wasm-pack/issues/672#issuecomment-813630435
wasm-pack build --target web --out-dir ../web/common/wasm ./
