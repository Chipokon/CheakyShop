require('dotenv').config();

const {
  USER_DATA_DB, PASSWORD_DATA_DB, DATABASE_DATA_DB, HOST_DATA_DB, PORT_DATA_DB
} = process.env;

module.exports={
  "development": {
    "username": USER_DATA_DB,
    "password": PASSWORD_DATA_DB,
    "database": DATABASE_DATA_DB,
    "host": HOST_DATA_DB,
    "port": PORT_DATA_DB,
    "dialect": "mysql",
  },
}
