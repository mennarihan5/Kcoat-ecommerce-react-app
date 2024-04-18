module.exports = {
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRY_SECS: Number.parseInt(
    process.env.JWT_ACCESS_TOKEN_EXPIRY_SECS || 3600
  ),
  JWT_REFRESH_TOKEN_EXPIRY_SECS: Number.parseInt(
    process.env.JWT_REFRESH_TOKEN_EXPIRY_SECS || 86400
  ),
};
