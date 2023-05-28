const { Sequelize } = require("sequelize");
const dataDB = require("mariadb");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_DATA_DB,
  process.env.USER_DATA_DB,
  process.env.PASSWORD_DATA_DB,
  {
    host: process.env.HOST_DATA_DB,
    dialect: "mysql",
    port: process.env.PORT_DATA_DB,
    dialectOptions: {
      connectionLimit: 5,
      // timezone: '+00:00',
      timezone: process.env.TIMEZONE,
      // allowPublicKeyRetrieval: true,
    },
    logging: false,
  }
);

const pool = dataDB.createPool({
  host: process.env.HOST_DATA_DB,
  database: process.env.DATABASE_DATA_DB,
  user: process.env.USER_DATA_DB,
  password: process.env.PASSWORD_DATA_DB,
  port: process.env.PORT_DATA_DB,
  //socketPath: process.env.SOCKET_PATH_DATA,
  connectionLimit: 5,
  //  timezone: 'UTC',
  // allowPublicKeyRetrieval: true,
  timezone: process.env.TIMEZONE,
});

async function selectFromDB(query) {
  if (query === "") {
    console.error("empty query select dataDB");
    return;
  }
  let conn;
  let data;
  try {
    conn = await pool.getConnection();
    data = await conn.query(query);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    conn.end();
  }
}

async function deleteFromDB(query) {
  let conn;
  try {
    conn = await pool.getConnection();
    let data = await conn.query(query);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    conn.end();
  }
}

async function updateInfoDB(query) {
  let conn;
  try {
    conn = await pool.getConnection();
    let data = await conn.query(query);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    conn.end();
  }
}

async function insertIntoDB(query) {
  let conn;
  let data;
  try {
    conn = await pool.getConnection();
    data = await conn.query(query);
    //console.log("insert"); console.log(query);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    conn.end();
  }
}

module.exports.sequelize = sequelize;
module.exports.selectFromDB = selectFromDB;
module.exports.deleteFromDB = deleteFromDB;
module.exports.insertIntoDB = insertIntoDB;
module.exports.updateInfoDB = updateInfoDB;
