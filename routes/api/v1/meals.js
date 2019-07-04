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

const existingMealById = (mealId) => {
  return Meal.findOne({ where: {id: mealId}})
  .then(meal => {
    if (meal != null) { return meal } else { return false }
  })
}

const existingFoodById = (foodId) => {
  return Food.findOne({ where: {id: foodId}})
  .then(food => {
    if (food != null) { return food } else { return false }
  })
}

const createMealFood = (mealId, foodId) => {
  MealFoods.create({meal_id: mealId, food_id: foodId})
  .then(mealFood => {
    return mealFood.id
  })
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

router.get("/:id/foods", function (req, res, next) {
  existingMealById(req.params.id)
  .then(mealExists => {
    if (mealExists == false) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send("Meal not found");
    } else {
      getMealObjects(mealExists)
      .then(meal => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(meal));
      })
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
})

router.post("/:id/foods/:id", function (req, res, next) {
  existingMealById(req.path.split("/")[1])
  .then(mealExists => {
    if (mealExists == false) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send("Meal not found");
    } else {
      existingFoodById(req.params.id)
      .then(foodExists => {
        if (foodExists == false) {
          res.setHeader("Content-Type", "application/json");
          res.status(404).send("Food not found");
        } else {
          createMealFood(mealExists.id, foodExists.id)
          res.setHeader("Content-Type", "application/json");
          res.status(201).send({message: `Successfully added ${foodExists.name} to ${mealExists.name}`});
        }
      })}
      })
      .catch(error => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).send({error})
      });
})

module.exports = router;
