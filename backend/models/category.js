"use strict";
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Category extends Model {}

  Category.init(
    {
      title: DataTypes.STRING,
      parentCategoryId: DataTypes.INTEGER,
      image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};
