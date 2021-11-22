cd "$(dirname "$0")"
cd ..

# relies on plugin heroku-repo
# `$ heroku plugins:install heroku-repo`
git subtree push --prefix web heroku main
