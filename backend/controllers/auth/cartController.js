const { Cart, Product } = require("../../models").db;

// Add item to cart controller method
const addToCart = async (req, res) => {
  try {
    const { UserId, productId, quantity } = req.body;

    // Check if the product exists
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Add the item to the cart
    let cart = await Cart.findOne({ where: { UserId } });
    if (!cart) {
      cart = await Cart.create({ UserId });
    }
    await cart.addProduct(product, { through: { quantity } });

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get cart contents controller method
const getCart = async (req, res) => {
  try {
    const { UserId } = req.query;

    // Find the user's cart
    const cart = await Cart.findOne({
      where: { UserId },
      include: [{ model: Product }],
    });

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addToCart, getCart };
