const UserModel = require("../../models/userModel");
const userService = require("../../service/user");
const passwordHelper = require("../../helpers/crypt/password");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const userData = await userService.retrieveUser({ email });
    if (!userData) {
      return res
        .status(401)
        .json({ message: "Account not found. Double check or sign-up." });
    }
    if (
      !passwordHelper.verifyPassword(
        password,
        userData.password,
        userData.password_salt
      )
    ) {
      return res.status(401).json({
        message: "Invalid email or password. Kindly check or try again.",
      });
    }
    return res.status(201).json(userData);
  },
  register: async (req, res) => {
    return res.status(201).json(await userService.createUser(req.body));
  },
};
