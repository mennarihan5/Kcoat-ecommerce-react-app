const router = require("express").Router();
const { login, signup, me } = require("../controllers/auth");
const { JWTAuthenticationMiddleware } = require("../middleware/auth");
const cartController = require("../controllers/auth/cartController");
const authReqDataSchema = require("../helpers/validators/request/schemas/auth");
const { requestDataValidatorMiddleware } = require("../middleware/validator");

//routes for login and signup
router.post(
  "/login",
  [requestDataValidatorMiddleware([authReqDataSchema.login])],
  login
);
router.post(
  "/signup",
  [requestDataValidatorMiddleware([authReqDataSchema.signup])],
  signup
);

router.get("/me", [JWTAuthenticationMiddleware], me);

//routes for product


//routes for category
// Route to create a new category
//router.post("/categories", categoryController.createCategory);
// Route to retrieve all categories
// router.get("/allCategories", categoryController.getAllCategories);
// // Route to retrieve a single category by ID
// router.get("/categories/:id", categoryController.getCategoryById);
// // Route to update a category
// router.put("/categories/:id", categoryController.updateCategory);
// // Route to delete a category
// router.delete("/categories/:id", categoryController.deleteCategory);

//routes for cart
router.get("/cart", cartController.getCart);
router.post("/cart/add", cartController.addToCart);

module.exports = router;
