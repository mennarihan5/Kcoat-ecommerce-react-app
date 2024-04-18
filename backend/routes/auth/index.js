const router = require("express").Router();
const { login, signup, me } = require("../../controllers/auth");
const { JWTAuthenticationMiddleware } = require("../../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);
router.get("/me", [JWTAuthenticationMiddleware], me);

module.exports = router;
