
require("dotenv").config();
const express = require("express");
const server = express();
const config = require("./serverConfig/config");
config.config(server);
//apis
const usersApi = require('./apis/users/users')
const { Sequelize } = require('sequelize');
//подключение apis

server.use('/api/cheakyshop/users', usersApi)

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_DATA_DB,  process.env.PASSWORD_DATA_DB, {
  host: 'localhost',
  dialect: 'mysql',
});


const PORT = process.env.PORT ?? 4000;


try{
  server.listen(PORT, async () => {
    console.log(`Connected on port ${PORT}`);
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
} catch(error){
  console.log(`Something wrong!`);
  
}
