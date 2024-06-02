"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Change the data type of the existing 'image' column from BLOB to STRING
    await queryInterface.changeColumn("Products", "image", {
      type: Sequelize.STRING, // Change the data type to STRING
      allowNull: true, // Keep the allowNull option as per your requirement
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the data type back to BLOB in case of rollback
    await queryInterface.changeColumn("Products", "image", {
      type: Sequelize.BLOB("long"), // Revert the data type to BLOB
      allowNull: true, // Keep the allowNull option consistent
    });
  },
};
