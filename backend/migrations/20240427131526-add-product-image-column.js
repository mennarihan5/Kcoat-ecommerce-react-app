"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Products', 'name', 'title');
    await queryInterface.addColumn('Products', 'image', {
      type: Sequelize.STRING, // Adjust the data type according to your requirements
      allowNull: true //Allow null to handle cases where image may not be   
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Products', 'title', 'name');
    await queryInterface.removeColumn('Products', 'image');
  },
};
