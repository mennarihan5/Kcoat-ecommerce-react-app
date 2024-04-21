const appConfig = require("../../config");
var jwt = require("jsonwebtoken");

module.exports = {
  _generateUserAccessToken: function (data) {
    return jwt.sign(data, appConfig.JWT_TOKEN_SECRET, {
      expiresIn: appConfig.JWT_ACCESS_TOKEN_EXPIRY_SECS,
    });
  },
  _generateUserRefreshToken: function (data) {
    return jwt.sign(data, appConfig.JWT_TOKEN_SECRET, {
      expiresIn: appConfig.JWT_REFRESH_TOKEN_EXPIRY_SECS,
    });
  },
  generateUserToken: function ({ id }) {
    return {
      access: this._generateUserAccessToken({ id }),
      refresh: this._generateUserRefreshToken({ id }),
    };
  },

  verifyUserToken: function (token) {
    return jwt.verify(token);
  },
  refreshAccessToken: function (refresh_token) {
    try {
      return {
        access: this._generateUserAccessToken(
          this.verifyUserToken(refresh_token)
        ),
      };
    } catch (err) {
      console.log(err);
      // err
    }
  },
};
