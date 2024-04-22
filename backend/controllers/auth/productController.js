const { Op } = require("sequelize");
const { Product } = require("../../models");

// Filter products controller method
// Filter products controller method
const filterProducts = async (req, res) => {
  try {
    let whereClause = {};
    const { type, color, size, priceRange } = req.query;

    // Validate and add conditions based on selected filters
    if (type && ["shirt", "coat", "jeans", "polo-shirt"].includes(type)) {
      whereClause.type = type;
    }
    if (color && ["black", "white", "grey", "blue"].includes(color)) {
      whereClause.color = color;
    }
    if (size && ["XS", "S", "M", "L", "XL"].includes(size)) {
      whereClause.size = size;
    }
    if (priceRange && ["1", "2", "3", "4"].includes(priceRange)) {
      switch (priceRange) {
        case "1":
          whereClause.price = { [Op.between]: [1500, 5000] };
          break;
        case "2":
          whereClause.price = { [Op.between]: [5000, 8500] };
          break;
        case "3":
          whereClause.price = { [Op.between]: [8500, 11500] };
          break;
        case "4":
          whereClause.price = { [Op.between]: [11500, 14500] };
          break;
        default:
          break;
      }
    }

    const filteredProducts = await Product.findAll({
      where: whereClause,
    });

    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { filterProducts };
