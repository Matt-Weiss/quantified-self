# Project: Quantified Self

Welcome to Quantified Self, an application that allows users to track foods and calories eaten throughout the day. Quantified Self is a REST API that exposes endpoints of food and meal data that can be consumed by a frontend application.

## Intent

This is a paired project completed in 10 days as a requirement at Turing School of Software & Design.

The project was built using Express which implements the following:

* Object oriented programming principles
* Database management with Sequelize
* Github Projects: https://github.com/Matt-Weiss/quantified-self/projects/1

This project includes a microservice that displays recipes by particular ingredients.
Microservice Repo: https://github.com/jalena-penaligon/quantified_recipes
Microservice Production Site: https://polar-basin-91086.herokuapp.com

## Tech Stack

* Express 4.16.1
* Sequelize - PostgreSQL.
* JavaScript

## Production Site

View it in production at https://lower-goose-93602.herokuapp.com

## Instructions
  ### How to setup:
      git clone git@github.com:Matt-Weiss/quantified-self.git
      cd quantified-self
      npm install
      npm start

  ### Available Endpoints:
   #### GET /api/v1/foods
       Sample Response
        Status: 200
        [{
           "id": 1,
           "name": "Apple",
           "calories": 120,
           "createdAt": "2019-07-04T16:15:14.300Z",
           "updatedAt": "2019-07-04T16:15:14.300Z"
         },
         {
           "id": 2,
           "name": "Banana",
           "calories": 140,
           "createdAt": "2019-07-04T16:15:14.300Z",
           "updatedAt": "2019-07-04T16:15:14.300Z"
         }]

   #### GET /api/v1/foods/:id
       Sample Response:
        Status: 200
        {
          "id": 1,
          "name": "Apple",
          "calories": 120,
          "createdAt": "2019-07-04T16:15:14.300Z",
          "updatedAt": "2019-07-04T16:15:14.300Z"
         }

   #### POST /api/v1/foods/
       Headers:
        Content-Type: application/json
        Accept: application/json
       Request Body:
        { "food": {
          "name": "Apple",
          "calories": 150}
        }

       Sample Response:
        Status: 201
        {
          "id": 1,
          "name": "Apple",
          "calories": 150,
          "createdAt": "2019-07-04T16:15:14.300Z",
          "updatedAt": "2019-07-04T16:15:14.300Z"
         }

   #### PATCH /api/v1/foods/:id
       Request Body:
        { "food": {
          "name": "Large Gala Apple",
          "calories": 180}
        }

       Sample Response:
        Status: 200
        {
          "id": 1,
          "name": "Large Gala Apple",
          "calories": 180,
          "createdAt": "2019-07-04T16:15:14.300Z",
          "updatedAt": "2019-07-04T16:15:14.300Z"
         }

   #### DELETE /api/v1/foods/:id
         Sample Response:
          Status: 204

   #### GET /api/v1/meals
         Sample Response
          Status: 200
          [{
            "id": 1,
            "name": "Breakfast",
            "foods": [
                {
                    "id": 7,
                    "name": "oatmeal",
                    "calories": 300
                }
              ]
            },
            {
            "id": 2,
            "name": "Lunch",
            "foods": [
                {
                    "id": 1,
                    "name": "Apple",
                    "calories": 120
                },
                {
                    "id": 3,
                    "name": "Tuna Sandwich",
                    "calories": 500
            }]
          }]

   #### GET /api/v1/meals/:meal_id/foods
       Sample Response:
        Status: 200
        {
           "id": 1,
           "name": "Breakfast",
           "foods": [
               {
                   "id": 7,
                   "name": "oatmeal",
                   "calories": 300
               }
            ]
         }

   #### POST /api/v1/meals/:meal_id/foods/:id
       Sample Response:
        Status: 201
        {
          "message": "Successfully added FOODNAME to MEALNAME"
        }

   #### DELETE /api/v1/foods/:id
       Sample Response:
        Status: 204

### Running Tests:
 - Tests for this API were built in Jest. Follow the steps below to setup with Jest.

         npm install jest -g
         npm install babel-jest supertest shelljs -D
         npm test

 ## Core Contributors:
 Jalena Taylor: https://github.com/jalena-penaligon/
 Matt Weiss: https://github.com/Matt-Weiss

 ## How to Contribute:
 - Fork & clone this repository. Make the desired changes and open a pull request, tagging @jalena-penaligon and @matt-weiss
