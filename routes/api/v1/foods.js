var express = require('express');
var router = express.Router();
var Food = require('../../../models').Food;

const existingFoodByName = (foodName) => {
  return Food.findOne({ where: {name: foodName.toLowerCase()}})
    .then(food => {
      if (food != null) { return food } else { return false }
    })
}

const existingFoodById = (foodId) => {
  return Food.findOne({ where: {id: foodId}})
  .then(food => {
    if (food != null) { return food } else { return false }
  })
}

router.get("/", function (req, res, next) {
  Food.findAll()
  .then(foods => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(foods));

  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

router.get("/:id", function(req, res, next) {
  existingFoodById(req.params.id)
  .then(foodExists => {
    if (foodExists == false) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send("Food not found");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(foodExists));
    }
  });
});

router.post("/", function (req, res, next) {
  existingFoodByName(req.body.food.name)
  .then(itemExists => {
    if (itemExists == false) {
      Food.create({name: req.body.food.name.toLowerCase(), calories: req.body.food.calories})
        .then(food => {
          res.setHeader("Content-Type", "application/json");
          res.status(201).send(JSON.stringify(food));
        })
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send("This food already exists.");
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({ error });
  });
});

router.delete("/:id", function (req, res, next) {
  existingFoodById(req.params.id)
  .then(foodExists => {
    if (foodExists == false) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send("Food not found");
    } else {
      Food.destroy({where: {id: foodExists.id}});
      res.setHeader("Content-Type", "application/json");
      res.status(204).send();
    }
  })
})

module.exports = router;
