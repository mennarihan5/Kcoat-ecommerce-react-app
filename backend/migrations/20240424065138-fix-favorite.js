'use strict';

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("Favorites", "userId", "UserId");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("Favorites", "UserId", "userId");
  },
};
