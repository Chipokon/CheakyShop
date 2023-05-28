'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', [{
      name: 'Card1',
      type: 'WoW Token',
      cost: 2000,
      owner: "Vasily",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
