const passwordHelper = require("../../helpers/crypt/password");
const userModel = require("../../models").Users;

module.exports = {
  createUser: async ({ full_name, email, password }) => {
    const { hash, salt } = passwordHelper.hashPassword(password);
    const data = {
      full_name,
      email,
      password: hash,
      password_salt: salt,
      password_reset_otp: null
    };
    return (await userModel.create(data))?.toJSON();
  },
  retrieveUser: async (kwargs) => {
    return (await userModel.findOne({ where: kwargs }))?.toJSON();
  },
};
