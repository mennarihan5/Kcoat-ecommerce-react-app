"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  CartItem.init(
    {
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );

  return CartItem;
};
