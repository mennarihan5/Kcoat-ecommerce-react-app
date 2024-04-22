'use strict';
const {
  Model
} = require('sequelize');
const { users } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.users, { foreignKey: "usersId" });
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};