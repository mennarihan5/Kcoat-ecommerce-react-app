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

const deleteCart = async (req, res) => {
  try {
    // Extract UserId and productId from request body
    const { UserId, productId } = req.body;

    // Check if UserId and productId are provided
    if (!UserId || !productId) {
      return res
        .status(400)
        .json({ message: "UserId and productId are required" });
    }

    // Find the cart associated with the provided UserId
    const cart = await Cart.findOne({ where: { UserId } });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product to remove from the cart
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found in the cart" });
    }

    // Remove the product from the cart
    await cart.removeProduct(product);

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { addToCart, getCart, deleteCart };
