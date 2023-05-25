const express = require("express");
const cors = require("cors");

module.exports.config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
};
