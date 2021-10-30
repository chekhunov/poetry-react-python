django:
    bash -c "python manage.py runserver"

react:
    bash -c "cd /client && npm start port=3002"

run:
    make django & make react