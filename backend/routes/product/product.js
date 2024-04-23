const router = require("express").Router();
const productController = require("../../controllers/auth/productController")


router.post("/addProduct", productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);


module.exports = router;