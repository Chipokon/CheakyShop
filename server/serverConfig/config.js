const express = require("express");
const cors = require("cors");

module.exports.config = (server) => {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(cors());
};
