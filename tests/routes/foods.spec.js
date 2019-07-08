var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');


describe('Test the foods path', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });
  beforeEach(() => {
  });
  afterEach(() => {
  });
  afterAll(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
    app.close();
  });

  test('It should respond to the GET /foods method', async (done) => {
    const res = await request(app)
      .get("/api/v1/foods")

      expect(res.statusCode).toBe(200)
      done();

  });

  test('It should respond to the GET /food/:id method', async (done) => {
    const res = await request(app)
      .get("/api/v1/foods/1")

      expect(res.statusCode).toBe(200)
      done();
  });

  test('It should respond to the DELETE /food/:id method', async (done) => {
    const res = await request(app)
      .delete("/api/v1/foods/1")

      expect(res.statusCode).toBe(204)
      done();
  });

  test('It should respond to the POST /food/ method', async (done) => {
    const newFood = { "food": { "name": "Apple", "calories": 150} }
    const res = await request(app)
      .post("/api/v1/foods")
      .send(newFood);
      expect(res.statusCode).toBe(201)
      done();
  });

  test('It should respond to the PATCH /food/:id method', async (done) => {
    const updatedFood = { "food": { "name": "Mint", "calories": "14"} }
    const res = await request(app)
      .patch("/api/v1/foods/2")
      .send(updatedFood);
      expect(res.statusCode).toBe(200)
      done();
  });
});
