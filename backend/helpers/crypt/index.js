const crypto = require("crypto");

module.exports = {
  generate32ByteSalt: () => crypto.randomBytes(16).toString("hex"),
};
