const express = require("express");

const Cars = require("../cars/carsModel.js");

const server = express();

server.use(express.json());

server.post("/cars", async (req, res) => {
  try {
    const car = await Cars.insert(req.body);
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = server;
