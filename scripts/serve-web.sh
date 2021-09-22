cd "$(dirname "$0")"
cd ../web

deno run --allow-read --unstable --allow-env --allow-net --import-map import_map.json ./server/server.ts
# GITHUB_SECRET=$GITHUB_SECRET LOG_LEVEL=debug deployctl run ./server/server.ts --no-check
# TODO: use deno/deployctl when Deno.emit is supported
