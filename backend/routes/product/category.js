const router = require("express").Router();
const categoryController = require("../../controllers/auth/categoryController");

//routes 
router.post("/", categoryController.upload.single('image'),categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory)


module.exports = router;
