cd "$(dirname "$0")"

cd server
GITHUB_SECRET=$GITHUB_SECRET LOG_LEVEL=debug deployctl run server.ts --no-check
