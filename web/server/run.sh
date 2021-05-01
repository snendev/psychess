npx ssvmup@0.1.20 build --target deno ./wasm-chess && \
deno run --unstable --allow-read --allow-net --allow-env --importmap src/import_map.json src/server.ts
