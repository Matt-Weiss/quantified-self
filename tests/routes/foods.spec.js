var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');

describe('Test the foods path', () => {
  test('It should respond to the GET method', () => {
    return request(app).get("/api/v1/foods").then(response => {
      expect(response.statusCode).toBe(200)
    })
  });
});
