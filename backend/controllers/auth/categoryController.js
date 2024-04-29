const { Category } = require("../../models").db;
const multer = require('multer');
const cloudinary = require("../../utils/cloudinaryConfig");
const path = require('path');
//const fs = require('fs');


// Multer Middleware
const storage = multer.memoryStorage();
  // ({
  //   destination: function (req, file, cb) {
  //     cb(null, file.originalname);
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "-" + file.originalname);
  //   },
  // })
const upload = multer({ storage: storage }).single('image');


const createCategory = async (req, res) => {
  try {
    const { title, parentCategoryId } = req.body;
    const image = req.file;
    if (!title || !image) {
      return res.status(400).json({
        message: "Title and an image are required for creating a category",
      });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image.buffer);
    const imageUrl = result.secure_url;

    //wait for all images to get uploaded
    ///const uploadedImages = await Promise.all(imageUploadPromises);

    //console.log("File Path:", images.path);

    //const imagePath = image.path;
    // const imagePath = path.join(__dirname, '..' , '..' , 'images', 'category_image', image.filename);
    // Save the image to the images directory
    // You may want to handle unique filenames to avoid conflicts
    // fs.writeFile(imagePath, image.buffer, (err) => {
    //   if (err) {
    //     console.error("Error saving image:", err);
    //     return res.status(500).send("Internal server error");
    //   }
    // });

    const category = await Category.create({
      title,
      image: imageUrl,
      parentCategoryId,
    });
    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send("Internal server error");
  }
};

// Controller method to retrieve all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(201).json(categories)
  } catch (error) {
    console.error("Error getting all categories:", error);
    res.status(500).send("Internal server error");
  }
}

// Controller method to retrieve a single category by ID
const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findOne({ where: { id: id } });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



// // Controller method to update a category
const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.update(req.body);
    const updatedCategory = await Category.findByPk(id);
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller method to delete a category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.destroy();
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  upload,
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
