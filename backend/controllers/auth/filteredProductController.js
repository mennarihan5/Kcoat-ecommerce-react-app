const { Op } = require("sequelize");
const { Product } = require("../../models").db;

// Filter products
const filterProducts = async (req, res) => {
  try {
    let whereClause = {};

    Object.keys(req.query).forEach((param) => {
      const value = req.query[param];
      switch (param) {
        case "type":
          whereClause["type"] = { [Op.like]: `%${value}%` };
          break;
        case "color":
          whereClause["color"] = { [Op.like]: `%${value}%` };
          break;
        case "size":
          whereClause["size"] = value;
          break;
        case "price":
          whereClause["price"] = parseFloat(value);
          break;
        default:
          break;
      }
    });
    
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

















// // Filter products
// const filterProducts = async (req, res) => {
//   try {
//     let whereClause = {};
//     const { type, color, size, price } = req.query;

  
//     if (type && ["shirt", "coat", "jeans", "polo-shirt"].includes(type)) {
//       whereClause.type = type;
//     }
//     if (color && ["black", "white", "grey", "blue"].includes(color)) {
//       whereClause.color = color;
//     }
//     if (size && ["XS", "S", "M", "L", "XL"].includes(size)) {
//       whereClause.size = size;
//     }
//     if (price && ["1", "2", "3", "4"].includes(price)) {
//       switch (price) {
//         case "1":
//           whereClause.price = { [Op.between]: [1500, 5000] };
//           break;
//         case "2":
//           whereClause.price = { [Op.between]: [5000, 8500] };
//           break;
//         case "3":
//           whereClause.price = { [Op.between]: [8500, 11500] };
//           break;
//         case "4":
//           whereClause.price = { [Op.between]: [11500, 14500] };
//           break;
//         default:
//           break;
//       }
//     }

//     const filteredProducts = await Product.findAll({
//       where: whereClause,
//     });

//     res.json(filteredProducts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = { filterProducts };
