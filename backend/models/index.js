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
//db.customers = require("./customerModel")(sequelize, DataTypes);
db.User = require("./userModel")(sequelize, DataTypes);
db.Category = require("./category")(sequelize, DataTypes);
db.Product = require("./product")(sequelize, DataTypes);
db.Cart = require("./cart")(sequelize, DataTypes);
db.CartItem = require("./cartItem")(sequelize, DataTypes);
db.Favorite = require("./favorite")(sequelize, DataTypes);

// Model initialization
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  console.log(`Model '${modelName}' initialized`);
});

// Associations
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

// Associations with aliases
db.User.hasMany(db.Favorite, { foreignKey: "UserId", as: "favorites" });
db.Favorite.belongsTo(db.User, { foreignKey: "UserId", as: "User" });

db.Favorite.belongsTo(db.Product, { foreignKey: "productId" });
db.Product.hasMany(db.Favorite, { foreignKey: "productId" });



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
db.Product.belongsToMany(db.Cart, {
 through: "CartItem",
  foreignKey: "productId",
});

db.CartItem.belongsTo(db.Cart, { foreignKey: "cartId" });
db.CartItem.belongsTo(db.Product, { foreignKey: "productId" });
db.Cart.hasMany(db.CartItem, { foreignKey: "cartId" }); 



db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = { db, sequelize, DataTypes };
