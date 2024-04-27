const { Category } = require("../../models").db;

const createCategory = async (req, res) => {
  try {
    const { title, parentCategoryId } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ message: "Title is required for creating a category" });
    }
    const category = await Category.create({ title, parentCategoryId });
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
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
