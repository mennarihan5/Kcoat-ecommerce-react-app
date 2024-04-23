const { Product } = require("../../models").db;
const { Category } = require("../../models").db;

//1. Create Product

const addProduct = async (req, res) => {
  try {
    if (!req.body.name || !req.body.categoryId) {
      return res.status(400).send({ message: "Name and categoryId is required" });
    }
    const category = await Category.findByPk(req.body.categoryId);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }

    let info = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      type: req.body.type,
      size: req.body.size,
      color: req.body.color,
      quantity: req.body.quantity,
      categoryId: req.body.categoryId
    };

    const product = await Product.create(info);
    res.status(200).send(product); // Use 200 for successful creation
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Internal server error");
  }
};

//2. get all products

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


//3. get single product

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ where: { id: id } });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
};
