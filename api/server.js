const express = require("express");

const Cars = require("../cars/carsModel.js");

const server = express();

server.use(express.json());

server.get("/cars", (req, res) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
