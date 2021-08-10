cd ~/grovest/chess

if [ -z $1 ]; then
    echo "Usage: build-web.sh {dev | start} {1 | 2}"
    exit 1
fi

if [ -z $2 ]; then
    echo "Usage: build-web.sh {dev | start} {1 | 2}"
    exit 1
fi

if [ $2 = "1" ]; then
    cargo build

    cd ./web/wasm-chess
    rustwasmc build --no-wasi --target deno --out-dir ../app/api/game/wasm ./
    cd ..

    cd ./app
    deno run --allow-read --allow-write build.ts

    # reload files for an initial build
    rm -rf .aleph
    alephjs $1
elif [ $2 = "2" ]; then
    cd ./web/app

    ## server will eventually terminate via error if browser is open
    ## if not, issue SIGTERM and run next lines manually
    # adjust build to work
    deno run --allow-read --allow-write postreload.ts development

    alephjs $1
fi

exit 0
