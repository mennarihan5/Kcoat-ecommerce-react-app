"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Categories', 'name', 'title');
    await queryInterface.addColumn('Categories', 'image', {
      type: Sequelize.BLOB("long"), // Adjust the data type according to your requirements
      allowNull: true, //Allow null to handle cases where image may not be
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Categories', 'title', 'name');
     await queryInterface.removeColumn('Categories', 'image');
  },
};
