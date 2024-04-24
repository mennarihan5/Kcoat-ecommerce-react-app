const yup = require("yup");
const { signup } = require("../../../../controllers/auth");

module.exports = {
  login: yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),
  signup: yup.object().shape({
    full_name: yup.string().min(6).max(30).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  }),
};
