'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING,
      unique: true
    });
    await queryInterface.changeColumn("users", "name", {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("users", "surname", {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("users", "nickname", {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("users", "password", {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("users", "name", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn("users", "surname", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn("users", "nickname", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn("users", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
