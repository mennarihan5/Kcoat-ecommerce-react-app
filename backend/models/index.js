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
db.users = require("./userModel")(sequelize, DataTypes);
db.Category = require("./Category")(sequelize, DataTypes);
db.product = require("./product")(sequelize, DataTypes);
db.cart = require("./cart")(sequelize, DataTypes);


// Associations
db.customers.associate(db);
// db.users.associate(db);
// db.Category.associate(db);
// db.product.associate(db);
// db.cart.associate(db);

// Model initialization
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  console.log(`Model '${modelName}' initialized`);
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
