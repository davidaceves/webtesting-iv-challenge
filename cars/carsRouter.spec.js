const request = require("supertest");

const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

const Cars = require("./carsModel.js");

describe("POST cars", () => {
  afterEach(async () => {
    await db("cars").truncate();
  });

  const testCar = {
    id: 1,
    make: "VW",
    model: "GTI",
    year: 1986
  };

  it("should post a new car", async () => {
    let carsNumber;

    carsNumber = await db("cars");

    expect(carsNumber).toHaveLength(0);

    await db("cars").insert(testCar);

    carsNumber = await db("cars");

    expect(carsNumber).toHaveLength(1);
  });

  it("should post a new car with status code 201", async () => {
    const res = await request(server).post("/games");

    expect(res.status).toBe(201);
  });
});
