cd "$(dirname "$0")"
cd ../web

deno --unstable run --allow-read --allow-env --allow-net --allow-write --import-map import_map.json --config deno.json ./server/server.ts
# GITHUB_SECRET=$GITHUB_SECRET LOG_LEVEL=debug deployctl run ./server/server.ts --no-check
# TODO: use deno/deployctl when Deno.emit is supported
