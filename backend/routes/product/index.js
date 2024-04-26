//import router
const router = require("express").Router();

router.use("/category", require("./category"));
router.use("/filterProduct", require("./filterProduct"));
router.use("/", require("./product") );

module.exports = router;
