const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
module.exports.config = (server) => {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(cors());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  server.use(bodyParser.json());
};
