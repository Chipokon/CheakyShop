
require("dotenv").config();
const express = require("express");
const server = express();
const config = require("./serverConfig/config");
config.config(server);
//apis
const usersApi = require('./apis/users/users')

//подключение apis

server.use('/api/cheakyshop/users', usersApi)


const PORT = process.env.PORT ?? 4000;
server.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});


