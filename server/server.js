
require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./serverConfig/config");
config.config(app);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});
