const path = require("path");
require('dotenv').config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const db = require(path.resolve(
  path.dirname(require.main.filename),
  "./serverConfig/dbConfig/dataDB.js"
));
const Users = db.sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    nickname: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
    refresh_token: {
      type: Sequelize.STRING,
    },
    role_id: {
      type: Sequelize.INTEGER,
    }, 
    updated_at: {
      type: Sequelize.DATE,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    paranoid: true,
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Users;
