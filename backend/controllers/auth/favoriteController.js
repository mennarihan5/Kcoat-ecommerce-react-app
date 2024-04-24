const { Favorite, Product } = require("../../models").db;

// Controller function to add a product to favorites
const addToFavorites = async (req, res) => {
  try {
    const { UserId, productId } = req.body;

    // Check if the favorite already exists
    const existingFavorite = await Favorite.findOne({
      where: { UserId, productId },
    });
    if (existingFavorite) {
      return res.status(400).json({ message: "Product already in favorites" });
    }

    // Create a new favorite
    await Favorite.create({ UserId, productId });

    res
      .status(201)
      .json({ message: "Product added to favorites successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to get all product on favorites
const getAllFavorites = async (req, res) => {
  try {
    const userId = req.params.UserId;

    // Find all favorites of the user with associated product details
    const favorites = await Favorite.findAll({
      where: { UserId: userId },
      include: [{ model: Product }],
    });

    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
    





// Controller function to remove a product from favorites
const removeFromFavorites = async (req, res) => {
  try {
    const { UserId, productId } = req.body;

    // Check if the favorite exists
    const favorite = await Favorite.findOne({ where: { UserId, productId } });
    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    // Delete the favorite
    await favorite.destroy();

    res
      .status(200)
      .json({ message: "Product removed from favorites successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { 
    addToFavorites, 
    getAllFavorites,
    removeFromFavorites
 };
