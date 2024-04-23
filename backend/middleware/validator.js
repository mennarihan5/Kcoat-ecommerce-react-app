module.exports = {
  requestDataValidatorMiddleware: (schemas) => (req, res, next) => {
    schemas.forEach(async (schema) => {
      try {
        await schema.validate(req.body);
        next();
      } catch (err) {
        return res.status(400).json({
          message: "Error in specified payload",
          errors: err.errors,
        });
      }
    });
  },
};
