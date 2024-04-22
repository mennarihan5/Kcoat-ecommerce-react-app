const router = require("express").Router();
const { login, signup, me } = require("../../controllers/auth");
const { JWTAuthenticationMiddleware } = require("../../middleware/auth");
const productController = require("../../controllers/auth/productController");
const cartController = require("../../controllers/auth/cartController");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../../controllers/auth/categoryController");

//routes for login and signup
router.post("/login", login);
router.post("/signup", signup);
router.get("/me", [JWTAuthenticationMiddleware], me);

//routes for product
router.get("/products", productController.filterProducts);

//routes for category
// Route to create a new category
router.post("/categories", createCategory);
// Route to retrieve all categories
router.get("/allCategories", getAllCategories);
// Route to retrieve a single category by ID
router.get("/categories/:id", getCategoryById);
// Route to update a category
router.put("/categories/:id", updateCategory);
// Route to delete a category
router.delete("/categories/:id", deleteCategory);

//routes for cart
router.get("/cart", cartController.getCart);
router.post("/cart/add", cartController.addToCart);

module.exports = router;
