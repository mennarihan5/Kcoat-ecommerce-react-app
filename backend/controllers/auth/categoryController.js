const Category = require('../../models/Category');


const createCategory = async (req, res) => {
  try{
    const {name, parentCategoryId} = req.body;
    if(!name){
      return res.status(400).json({ message: 'Name is required for creating a category'});
    }
    const category = await Category.create({ name, parentCategoryId });
    res.status(201).json(category);
  } catch (error){
    console.error("Error creating category:", error);
    res.status(500).send("Internal server error")
  }
}

// // Controller method to retrieve all categories
// async function getAllCategories(req, res) {
//   try {
//     const categories = await Category.findAll();
//     res.json(categories);
//   } catch (error) {
//     errorHandler(res, error);
//   }
// }

// // Controller method to retrieve a single category by ID
// async function getCategoryById(req, res) {
//   const { id } = req.params;
//   try {
//     const category = await Category.findByPk(id);
//     if (!category) {
//       res.status(404).json({ message: "Category not found" });
//     } else {
//       res.json(category);
//     }
//   } catch (error) {
//     errorHandler(res, error);
//   }
// }

// // Controller method to update a category
// async function updateCategory(req, res) {
//   const { id } = req.params;
//   try {
//     const category = await Category.findByPk(id);
//     if (!category) {
//       res.status(404).json({ message: "Category not found" });
//     } else {
//       await category.update(req.body);
//       res.json(category);
//     }
//   } catch (error) {
//     errorHandler(res, error);
//   }
// }

// // Controller method to delete a category
// async function deleteCategory(req, res) {
//   const { id } = req.params;
//   try {
//     const category = await Category.findByPk(id);
//     if (!category) {
//       res.status(404).json({ message: "Category not found" });
//     } else {
//       await category.destroy();
//       res.json({ message: "Category deleted successfully" });
//     }
//   } catch (error) {
//     errorHandler(res, error);
//   }
// }

module.exports = {
  createCategory,
  // getAllCategories,
  // getCategoryById,
  // updateCategory,
  // deleteCategory,
};
