const express = require("express");

const Cars = require("../cars/carsModel.js");
const CarsRouter = require("../cars/carsRouter.js");

const server = express();

server.use(express.json());
server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
