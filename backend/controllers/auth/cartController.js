const product = require("../../models/product");
const { updateCategory } = require("./categoryController");

const { Cart, Product, CartItem } = require("../../models").db;

// Add item to cart controller method
// const addToCart = async (req, res) => {
//   try {
//     const { UserId, productId, quantity } = req.body;

//     // Check if the product exists
//     const existingProduct = await Product.findByPk(productId);
//     if (!existingProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     // Find or create cart for the user
//     let cart = await Cart.findOne({ where: { UserId } });
//     if (!cart) {
//       cart = await Cart.create({ UserId });
//     }

//     // Find the cart item associated with the product
//     let cartItem = await CartItem.findOne({
//       where: { cartId: cart.id, productId },
//     });

//     if (cartItem) {
//       // If the cart item exists, update the quantity and total price
//       const updatedQuantity = cartItem.quantity + quantity;
//       const updatedTotalPrice =
//         cartItem.totalPrice + existingProduct.price * quantity;
//       await cartItem.update({
//         quantity: updatedQuantity,
//         totalPrice: updatedTotalPrice,
//       });
//     } else {
//       // If the cart item doesn't exist, create a new cart item
//       await CartItem.create({
//         cartId: cart.id,
//         productId,
//         quantity,
//         totalPrice: existingProduct.price * quantity,
//       });
//     }

//     res.status(201).json({ message: "Item added to cart successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// Modify addToCart Function
const addToCart = async (req, res) => {
  try {
    const { UserId, productId, quantity } = req.body;

    // Check if the product exists
    const existingProduct = await Product.findByPk(productId);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Find or create cart for the user
    let cart = await Cart.findOne({ where: { UserId } });
    if (!cart) {
      cart = await Cart.create({ UserId, productId, quantity });
    } else {
      // Update productId and quantity in the existing cart
      await cart.update({ productId, quantity });
    }

    // Create or update the cart item in the CartItem table
    let cartItem = await CartItem.findOne({
      where: { cartId: cart.id, productId },
    });

    if (cartItem) {
      // If the cart item exists, update the quantity
      const updatedQuantity = cartItem.quantity + quantity;
      await cartItem.update({ quantity: updatedQuantity });
    } else {
      // If the cart item doesn't exist, create a new cart item
      await CartItem.create({ cartId: cart.id, productId });
    }

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCart = async (req, res) => {
  try {
    const { UserId } = req.query;

    // Find the user's cart
    const cart = await Cart.findOne({
      where: { UserId },
      include: [
        { model: Product },
        { model: CartItem, include: [Product] }, // Include CartItem model with its associated Product
      ],
    });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (!cart.CartItems || cart.CartItems.length === 0) {
      return res.status(404).json({ message: "No products found in the cart" });
    }

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

    // // Find the product to remove from the cart
    // const product = await Product.findByPk(productId);
    // if (!product) {
    //   return res.status(404).json({ message: "Product not found in the cart" });
    // }

   await cart.removeProduct(productId);
    
    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Cart Summary
const getCartSummary = async (req, res) => {
  try{
    const { UserId, promoCode } = req.query;

    // Find the user's cart
    const cart = await Cart.findOne({
      where: { UserId },
      include: [{model: Product}],
    });
    
    // Subtotal
    let subtotal = 0;
    cart.Products.forEach(item => {
      if (item.Cart && item.Cart.quantity){
      subtotal += item.price * item.Cart.quantity;
      }
    });
    
    //Shipping fee
    const shipping = 1000; //#1000

    // calculate promo discount based on promo code
    let promoDiscount = 0;
    if (promoCode === "YOUR_PROMO_CODE"){
      promoDiscount = 0.1 * subtotal; //10% discount
    }
    
    // Total

    const total = subtotal + shipping - promoDiscount;

    res.json({subtotal, shipping, promoDiscount, total});
  } catch (error){
    console.error(error);
    res.status(500).json({ message: "Internal server error"});
  }
};


module.exports = { addToCart, getCart, deleteCart, getCartSummary };
