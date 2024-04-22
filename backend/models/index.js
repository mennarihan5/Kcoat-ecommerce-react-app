const dbConfig = require("../config/dbConfig");
console.log("hellossssssssss");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.customers = require("./customerModel")(sequelize, DataTypes);
db.Users = require("./userModel")(sequelize, DataTypes);
db.Category = require("./Category")(sequelize, DataTypes);
db.Product = require("./Product")(sequelize, DataTypes);
db.Cart = require("./Cart")(sequelize, DataTypes);
db.Favorite = require("./favorite")(sequelize, DataTypes); // Add this line

// Model initialization
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  console.log(`Model '${modelName}' initialized`);
});

// Associations
// Clear previous associations
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

// Define associations with aliases
db.Users.hasMany(db.Favorite, { foreignKey: "userId", as: "favorites" });
db.Favorite.belongsTo(db.Users, { foreignKey: "userId", as: "user" });

db.Category.hasMany(db.Product, { foreignKey: "categoryId", as: "products" });
db.Product.belongsTo(db.Category, {
  foreignKey: "categoryId",
  as: "category",
});
db.Category.hasMany(db.Category, {
  foreignKey: "parentCategoryId",
  as: "subCategories",
});

db.Cart.belongsToMany(db.Product, {
  through: "CartItem",
  foreignKey: "cartId",
});
db.Product.belongsTo(db.Category, { foreignKey: "categoryId" });
db.Product.belongsToMany(db.Cart, {
  through: "CartItem",
  foreignKey: "productId",
});

// Add other associations here if needed

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = {db,
  sequelize,
  DataTypes
};
