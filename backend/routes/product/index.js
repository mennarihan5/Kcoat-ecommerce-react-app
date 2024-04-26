//import router
const router = require("express").Router();

router.use("/category", require("./Category"));
router.use("/filterProduct", require("./filterProduct"));
router.use("/", require("./product") );

module.exports = router;
