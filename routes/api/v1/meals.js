var express = require('express');
var router = express.Router();
var Meal = require('../../../models').Meal;
var Food = require('../../../models').Food;
var MealFoods = require('../../../models').MealFoods;


const parseMeals = (meals) => {
   return meals.map(getMealObjects)
}

//The async/await here for parseFoods turned out to be key to getting the array of foods
var getMealObjects = async (meal) => {
  var getMealComponents = { id: meal.id,
                          name: meal.name,
                         foods: await parseFoods(meal.getFoods())
                         }
  return getMealComponents
}

var parseFoods = (foods) => {
  return foodsArray = foods.map(getAllFoods)
  .then(foods => {
    return foods
  })
}

var getAllFoods = (food) => {
  return { id: food.id,
         name: food.name,
     calories: food.calories}
}



router.get("/", function (req, res, next) {
  Meal.findAll()
  .then(meals => {
    Promise.all(parseMeals(meals))
    .then(meals => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(meals));
    })
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

router.delete("/:mealId/foods/:foodId", function (req,res,next) {
  MealFoods.findOne({where: {meal_id: req.params.mealId,
                             food_id: req.params.foodId}})
  .then(mealFood => {
    if (mealFood) {
      mealFood.destroy()
      res.setHeader("Content-Type", "application/json");
      res.status(204).send()
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send("That food ID is not associated with that meal.")
    }
  })
})

module.exports = router;
