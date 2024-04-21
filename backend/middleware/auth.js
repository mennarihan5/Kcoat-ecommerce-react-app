module.exports = {
  JWTAuthenticationMiddleware: (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.split(" ")[1];
      //
    }
    return res.status(401).json({
      message: "You are unauthorized to perform this request",
    });
  },
};
