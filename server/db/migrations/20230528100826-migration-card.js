'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("cards", {
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
      type: Sequelize.INTEGER,
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
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("cards");
  }
};
