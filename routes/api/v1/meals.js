var express = require('express');
var router = express.Router();
var Meal = require('../../../models').Meal;
var Food = require('../../../models').Food;
var MealFoods = require('../../../models').MealFoods;


const parseMeals = (meals) => {
  var allMeals = meals.map(getFoodArray)
  return allMeals
}

var getFoodArray = (meal) => {
  var getMealComponents = { id: meal.id,
                name: meal.name,
               foods: meal.getFoods()
  }
  return getMealComponents
}

// var getRelatedFoods = (meal) => {
//   var foods = meal.getFoods()
//     var pry = require('pryjs'); eval(pry.it)
//
// }


router.get("/", function (req, res, next) {
  Meal.findAll()
  .then(meals => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(parseMeals(meals)));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

module.exports = router;
