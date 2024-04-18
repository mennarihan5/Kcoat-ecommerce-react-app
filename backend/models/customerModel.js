module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("customer", {
    cusid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cusName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  return Customer;
};
