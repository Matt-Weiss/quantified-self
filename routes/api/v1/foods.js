var express = require('express');
var router = express.Router();
var Food = require('../../../models').Food;

const existingFood = (foodName) => {
  return Food.findOne({ where: {name: foodName.toLowerCase()}})
    .then(food => {
      if (food != null) { return true } else { return false }
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
  })
})

router.post("/", function (req, res, next) {
  var itExists = existingFood(req.body.food.name)
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
  })
})

module.exports = router;
