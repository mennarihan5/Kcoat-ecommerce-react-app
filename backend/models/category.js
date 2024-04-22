'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: "categoryId" });
      Category.belongsTo(Category, {
        foreignKey: "parentCategoryId",
        as: "parent",
      });
      Category.hasMany(Category, {
        foreignKey: "parentCategoryId",
        as: "subCategories",
      });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    parentCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};