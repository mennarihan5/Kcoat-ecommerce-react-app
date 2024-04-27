const { Product } = require("../../models").db;
const { Category } = require("../../models").db;
const multer = require('multer');
//const fs = require('fs');

// Multer Middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb (null, 'images/product_image');
  },
  filename: function (req, file, cb){
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage});

//1. Create Product

const addProduct = async (req, res) => {
  try {
    if (!req.body.title || !req.body.categoryId || !req.file) {
      return res
        .status(400)
        .send({ message: "Title, categoryId, and image is required" });
    }
    const category = await Category.findByPk(req.body.categoryId);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }

    // Log the file path to verify
    console.log("File Path:", req.file.path);

    const imagePath = req.file.path.replace(/\\/g, "/"); //file path generated by multer
    // // Save the image to the images directory
    // // You may want to handle unique filenames to avoid conflicts
    // fs.writeFile(imagePath, req.file.buffer, (err) => {
    //   if (err) {
    //     console.error("Error saving image:", err);
    //     return res.status(500).send("Internal server error");
    //   }
    // });

    // read image data from the uploaded file
    //const imageData = req.file.buffer;

    let info = {
      title: req.body.title,
      description: req.body.description,
      image: imagePath,
      // price: req.body.price,
      price: parseFloat(req.body.price.replace(/[^\d.]/g, "")), // Extract numerical value
      type: req.body.type,
      size: req.body.size,
      color: req.body.color,
      quantity: req.body.quantity,
      categoryId: req.body.categoryId,
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

// 4. update product
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.update(req.body, { where: { id: id } });
    const updatedProduct = await Product.findOne({ where: { id: id } });
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Internal server error");
  }
};


//5. delete product by id

const deleteProduct = async (req, res) => {
  try{
    let id = req.params.id

    await Product.destroy({where: { id: id}})

    res.status(200).send('Product is deleted!');
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal server error");
  }

};




module.exports = {
  upload,
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct
};
