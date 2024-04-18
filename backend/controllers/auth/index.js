const UserModel = require("../../models/userModel");
const userService = require("../../service/user");
const passwordHelper = require("../../helpers/crypt/password");
const JWTHelper = require("../../helpers/auth/jwt");

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
    const token = JWTHelper.generateUserToken({ id: userData.id });
    return res.status(201).json(token);
  },
  signup: async (req, res) => {
    return res.status(201).json(await userService.createUser(req.body));
  },
  me: async (req, res) => {
    return res.status(200).json(await userService.retrieveUser({ id: 5 }));
  },
};
