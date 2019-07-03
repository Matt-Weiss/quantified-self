var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');


describe('Test the foods path', () => {
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
  afterAll(() => {
    sequelize.close();
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
});
