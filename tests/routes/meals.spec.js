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

  test('It should respond to the GET /meals/:id method', async (done) => {
    const res = await request(app)
      .get("/api/v1/meals/1")

      expect(res.statusCode).toBe(200)
      done();
  });
});
