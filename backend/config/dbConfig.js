module.exports = {
  HOST: 'buvzb90xiuidansg5aph-mysql.services.clever-cloud.com',
  USER: 'up1qx4xyefvxc1ey',
  PASSWORD: '5seXTomP09AZ0IBSjGZg',
  DB: 'buvzb90xiuidansg5aph',
  dialect: 'mysql',

  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "",
  // DB: "kcoat",
  // dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};