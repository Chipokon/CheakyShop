const path = require("path");
require('dotenv').config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const db = require(path.resolve(
  path.dirname(require.main.filename),
  "./serverConfig/dbConfig/dataDB.js"
));
const Cards = db.sequelize.define(
  "cards",
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
    type: {
      type: Sequelize.STRING,
    },
    cost: {
      type: Sequelize.NUMBER,
    },
    owner: {
        type : Sequelize.STRING,
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

module.exports = Cards;