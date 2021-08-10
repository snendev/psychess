cd ~/grovest/chess

if [ -z $1 ]; then
    echo "Supply either 1 or 2"
    exit 1
fi

if [ $1 = "1" ]; then
    cargo build

    cd ./web/wasm-chess
    rustwasmc build --no-wasi --target deno --out-dir ../app/api/game/wasm ./
    cd ..

    cd ./app
    deno run --allow-read --allow-write build.ts

    # reload files for an initial build
    rm -rf .aleph
    alephjs dev
elif [ $1 = "2" ]; then
    cd ./web/app

    ## server will eventually terminate via error if browser is open
    ## if not, issue SIGTERM and run next lines manually
    # adjust build to work
    deno run --allow-read --allow-write postreload.ts development

    alephjs dev
fi

exit 0
