#!/bin/sh

echo "Apply DATABASE migrations"

python manage.py migrate

echo "Starting server"

exec "$@"
