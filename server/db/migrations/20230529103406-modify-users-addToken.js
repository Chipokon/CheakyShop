'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "token", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("users", "refresh_token", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("users", "role_id", {
      type: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "token");
    await queryInterface.removeColumn("users", "refresh_token");
    await queryInterface.removeColumn("users", "role_id");
  }
};
