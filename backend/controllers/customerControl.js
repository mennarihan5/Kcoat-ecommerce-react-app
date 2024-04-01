const db = require('../models')

//create main model
const insertCus = (req, res) => {
  const cusData = {
    cusName: req.body.fullname,
    username: req.body.username,
    password: req.body.userpassword,
  };
  Customer.create(cusData)
    .then((rs) => {
      console.log(rs);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {insertCus};