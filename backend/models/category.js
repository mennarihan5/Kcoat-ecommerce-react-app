// category.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
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
