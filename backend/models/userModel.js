module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
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
  });

  return users;
};
