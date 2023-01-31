const request = require("supertest");
const app = require('../app');

describe("GET / ", () => {
    test("It should respond with info", async () => {
      const response = await request(app).get("/");
      expect(response.body).toEqual({ info: 'Node.js, Express, and Postgres API' });
      expect(response.statusCode).toBe(200);
    });
  });