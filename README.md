
# MapPlotter

A Django Application to draw plots on mapbox and save them on postgres.

# Run The App in your local machine
# For the backend
1 - Make sure that Python is already installed
```
python --version
```
2 - Install Virtual Environment and activate it (recommended):
```
python -m venv venv
source venv/bin/activate
```
4 - Install Django
```
pip install django
```
5- Run Migration
```
Run Migrations
```
6 - Run the Development Server
```
python manage.py runserver
```

you will also need to create a `.env` in backend make sure its along with ```setting.py``` and add the following variables : 
```
SECRET_KEY=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
```

# For the frontend 

navigate to frontend folder 
```
cd frontend
```
Create a ```.env.local``` with following variable : 
```
# .env.local
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
```
Run the following command
```
npm run dev
```

# Running with Docker

you can simply run the app using ```docker compose ``` , just make sure to create ```.env``` in same root with ```docker.compose.yml``` 
``` 
#env
DB_NAME=
DB_USER=
DB_PASS=
``` 
add another ```.env``` and make sure its in the same directory with ```setting.py```
```
SECRET_KEY=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
```
also in frontend directory add ```.env.local```
```
# .env.local
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
```


