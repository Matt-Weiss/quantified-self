var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');
var Food = require('../../models').Food;

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
  });
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
})
