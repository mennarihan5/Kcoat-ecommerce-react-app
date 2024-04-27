const router = require("express").Router();
const productController = require("../../controllers/auth/productController")


router.post("/addProduct", productController.upload.single('image'),productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);

router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct)

module.exports = router;