### TODO REWRITE

## build rust in first container
FROM rust:1.51.0 as wasm-builder

RUN curl https://raw.githubusercontent.com/second-state/ssvmup/master/installer/init.sh -sSf | sh

MKDIR /app
WORKDIR /app

COPY wasm-chess/src/ /app/src
ADD wasm-chess/Cargo.toml /app/Cargo.toml

RUN ssvmup build --target deno

## server image
FROM deno:1.9.2

MKDIR /app
WORKDIR /app

COPY --from=wasm-builder /app/pkg /app/wasm-chess/pkg
COPY src/ /app/src

CMD deno run --unstable --allow-read --allow-net --allow-env --importmap \
    src/import_map.json src/server.ts
