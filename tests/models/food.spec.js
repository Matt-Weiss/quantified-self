var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');
var Food = require('../../models').Food;

// describe('Test the root path', () => {
//   test('It should respond to the GET method', () => {
//     return request(app).get("/").then(response => {
//       expect(response.statusCode).toBe(200)
//       expect(response.text).toContain("Welcome to Express")
//     })
//   });
// });

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
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
