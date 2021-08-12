if [ -z $1 ]; then
    echo "Usage: build-web.sh {dev | start} {1 | 2}"
    exit 1
fi

if [ -z $2 ]; then
    echo "Usage: build-web.sh {dev | start} {1 | 2}"
    exit 1
fi

cd "$(dirname "$0")"

if [ $2 = "1" ]; then
    cd ../..
    cargo build

    cd ./wasm
    rustwasmc build --no-wasi --target deno --out-dir ../web/aleph-experimental/api/game/wasm ./
    cd ..

    cd ./web/aleph-experimental
    deno run --allow-read --allow-write prebuild.ts

    # reload files for an initial build
    rm -rf .aleph
    alephjs $1
elif [ $2 = "2" ]; then
    ## server will eventually terminate via error if browser is open
    ## if not, issue SIGTERM and run next lines manually
    # adjust build to work
    deno run --allow-read --allow-write postbuild.ts development

    alephjs $1
fi

exit 0
