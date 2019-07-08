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

  test('It should respond to the GET /meals method', async (done) => {
    const res = await request(app)
      .get("/api/v1/meals")

      expect(res.statusCode).toBe(200)
      done();

  });

  test('It should respond to the GET /meals/:id/foods method', async (done) => {
    const res = await request(app)
      .get("/api/v1/meals/1/foods")

      expect(res.statusCode).toBe(200)
      done();
  });

  test('It should throw a 404 on GET /meals/:id/foods if the meal does not exist', async (done) => {
    const res = await request(app)
      .get("/api/v1/meals/100/foods")

      expect(res.statusCode).toBe(404)
      done();
  });

  test('It should respond to the DELETE /meals/:id/foods/:id method', async (done) => {
    const res = await request(app)
      .delete("/api/v1/meals/1/foods/2")

      expect(res.statusCode).toBe(204)
      done();
  });

  test('It should throw a 404 on DELETE /meals/:id/foods/:id if the ids are not associated', async (done) => {
    const res = await request(app)
      .delete("/api/v1/meals/1/foods/200")

      expect(res.statusCode).toBe(404)
      done();
  });

  test('It should respond to the POST /meals/:id/foods/:id method', async (done) => {
    const res = await request(app)
      .post("/api/v1/meals/1/foods/3")

      expect(res.statusCode).toBe(201)
      done();
  });

  test('It should throw a 404 on POST /meals/:id/foods/:id method if the meal does not exist', async (done) => {
    const res = await request(app)
      .post("/api/v1/meals/100/foods/3")

      expect(res.statusCode).toBe(404)
      done();
  });

  test('It should throw a 404 on POST /meals/:id/foods/:id method if the food does not exist', async (done) => {
    const res = await request(app)
      .post("/api/v1/meals/1/foods/300")

      expect(res.statusCode).toBe(404)
      done();
  });
});
