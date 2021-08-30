cd "$(dirname "$0")"
# deno run --allow-read --unstable --allow-env --allow-net --import-map import_map.json server.ts
GITHUB_SECRET=$GITHUB_SECRET LOG_LEVEL=debug deployctl run server.ts --no-check
