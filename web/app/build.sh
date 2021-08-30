cd "$(dirname "$0")"

rm -rf ../server/public
cp -r public ../server/public

bundler bundle src/index.tsx=index.js -c ./tsconfig.json --import-map ./import_map.json --out-dir ../server/public
