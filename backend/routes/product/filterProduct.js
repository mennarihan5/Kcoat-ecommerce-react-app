const router = require("express").Router();
const filterProductController = require("../../controllers/auth/filteredProductController");

router.get("/products", filterProductController.filterProducts);


module.exports = router;