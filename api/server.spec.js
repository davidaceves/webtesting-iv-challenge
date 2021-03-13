const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

const Cars = require("../cars/carsModel.js");

describe("GET /cars", () => {
  it("should return 200", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
