const db = require("../../models/category");
const { Category } = db;

// Controller method to create a new category
async function createCategory(req, res) {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Controller method to retrieve all categories
async function getAllCategories(req, res) {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Controller method to retrieve a single category by ID
async function getCategoryById(req, res) {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json(category);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Controller method to update a category
async function updateCategory(req, res) {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    } else {
      await category.update(req.body);
      res.json(category);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Controller method to delete a category
async function deleteCategory(req, res) {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    } else {
      await category.destroy();
      res.json({ message: "Category deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
