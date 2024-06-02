'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
  }
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    type: DataTypes.DECIMAL,
    size: DataTypes.JSON,
    color: DataTypes.JSON,
    quantity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};