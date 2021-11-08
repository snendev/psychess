cd "$(dirname "$0")"
cd ..

heroku repo:reset
heroku git:remote -a psychess
