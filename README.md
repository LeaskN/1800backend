## Flowers back-end

- The purpose of this repo is to create a back end for the Application Developer role take home story.  


* Pre-requisites
    - postgres installed locally
    - OSX - brew install postgres
    - npm install -g knex

* Setup
    - npm install
    - createdb flowers-info 
    - knex migrate:latest 
    - knex seed:run 

* Starting Development
    - npm run dev

* Starting Production
    - npm start

* Viewing the back-end
    - visit http://localhost:5000/api/v1/people