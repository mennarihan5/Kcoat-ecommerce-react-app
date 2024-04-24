const { favorite } = require("../../models").db;

// Controller function to add a product to favorites
const addToFavorites = async (req, res) => {
  try {
    const { UserId, productId } = req.body;

    // Check if the favorite already exists
    const existingFavorite = await favorite.findOne({
      where: { UserId, productId },
    });
    if (existingFavorite) {
      return res.status(400).json({ message: "Product already in favorites" });
    }

    // Create a new favorite
    await favorite.create({ UserId, productId });

    res
      .status(201)
      .json({ message: "Product added to favorites successfully" });
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
    const favorite = await favorite.findOne({ where: { UserId, productId } });
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

module.exports = { addToFavorites, removeFromFavorites };
