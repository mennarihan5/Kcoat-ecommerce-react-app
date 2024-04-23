"use strict";
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Category extends Model {}

  Category.init(
    {
      name: DataTypes.STRING,
      parentCategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};
