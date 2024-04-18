const passwordHelper = require("../../helpers/crypt/password");
const UserModel = require("../../models").users;

module.exports = {
  createUser: async ({ full_name, email, password }) => {
    const { hash, salt } = passwordHelper.hashPassword(password);
    const data = {
      full_name,
      email,
      password: hash,
      password_salt: salt,
    };
    return (await UserModel.create(data))?.toJSON();
  },
  retrieveUser: async (kwargs) => {
    return (await UserModel.findOne({ where: kwargs }))?.toJSON();
  },
};
