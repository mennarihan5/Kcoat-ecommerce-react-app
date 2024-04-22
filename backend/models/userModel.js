"use strict";
const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      full_name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: false,
      },
      email: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      password_salt: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      password_reset_otp: {
        type: DataTypes.STRING(6),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
