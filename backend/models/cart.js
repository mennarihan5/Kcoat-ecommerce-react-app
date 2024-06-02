"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // Define associations here
    }

    // async updateOrCreateCartItem(productId, quantity) {
    //   try {
    //     // Check if the product is already in the cart
    //     const existingCartItem = await this.getProducts({
    //       where: { id: productId },
    //     });

    //     if (existingCartItem.length > 0) {
    //       // If the product exists in the cart, update the quantity directly in the Cart table
    //       const updatedQuantity = existingCartItem[0].quantity + quantity;
    //       await existingCartItem[0].update({ quantity: updatedQuantity });
    //     } else {
    //       // If the product is not in the cart, add it with the specified quantity
    //       await this.addProduct(productId, { through: { quantity } });
    //     }
    //   } catch (error) {
    //     throw error;
    //   }
    // }
  }

  Cart.init(
    {
      UserId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER, 
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );

  return Cart;
};
