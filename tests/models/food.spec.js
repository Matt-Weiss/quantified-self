var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');
var Food = require('../../models').Food;

describe('Food model', () => {
  test('Is created with attributes', () => {
    Food.create({
        name: "Apple",
        calories: 120
    }).then(food =>{
      expect(food.name).toBe("Apple")
      expect(food.calories).toBe(120)
    })
  })
});

/*
Game.create({
          title: req.body.title,
          price: req.body.price,
          releaseYear: req.body.releaseYear,
          active: req.body.active
    })
*/
