"use strict";
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Category extends Model {}

  Category.init(
    {
      title: DataTypes.STRING,
      parentCategoryId: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};
