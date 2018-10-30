### Django Ninja ###
* Angular JS 1.0 
* Bootstrap 4  
* Django RestFramework 
* ElasticSearch 
* GraphQL 
* OpenCV 
* PostGres 


#### Django Setup ####
```bash
pip install Django==1.11.16
pip install djangorestframework
pip install django-rest-auth
pip install elasticsearch_dsl
pip install django_elasticsearch_dsl
pip install django_elasticsearch_dsl_drf
pip install freeze
pip install django-filter
pip install psycopg2
pip install Pillow
pip install graphene_django
pip install django-graphiql
pip install opencv-contrib-python --upgrade
```

#### Client Setup ####
```bash
npm init -y
npm install --save bootstrap jquery popper.js
npm install --save-dev gulp gulp-concat gulp-sass
```

#### Angular 1.0 Setup ####
```bash
npm install --save angular angular-animate angular-ui-router
```

#### GraphQL Client Setup ####
```bash
# npm install --save angular1-apollo apollo-client
# npm install --save apollo-boost graphql-tag graphql
# npm install --save graphql.js 
```

#### POSTGRES Simple Password Change ####
* Servers
    *   Databases
        * Login/Group Roles
            * postgres -->  properties --> definition --> password 
                * Go to postgres folder and then hba.conf       

#### Elastic Search Download ####
```bash
curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.3.tar.gz
tar -xzf elasticsearch-5.6.3.tar.gz
cd elasticsearch-5.6.3/bin/elasticsearch.bat [Windows]
```
#### Login Credentials ####
Login Credentials
```bash
username: test
password: test1234
```

#### Few Commands ####
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py search_index --rebuild
```