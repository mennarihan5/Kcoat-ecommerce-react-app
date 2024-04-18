const crypto = require("crypto");
const { generate32ByteSalt } = require(".");

module.exports = {
  hashPassword: (password) => {
    const salt = generate32ByteSalt();
    return {
      hash: crypto
        .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
        .toString(`hex`),
      salt: salt,
    };
  },
  verifyPassword: (password, hash, salt) => {
    return (
      crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`) ===
      hash
    );
  },
};
