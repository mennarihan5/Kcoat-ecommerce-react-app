// favorite.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {}

  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );

  return Favorite;
};
