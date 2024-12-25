const Category = require("../../models/categoryModel");

const fetchAllCategory = async (req, res) => {
   try {
      const now = new Date();

      // Xoá các category đã hết hạn (isBlocked không null và thời gian isBlocked > 7 ngày trước)
      await Category.deleteMany({
         isBlocked: { $ne: null },
         isBlocked: { $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) },
      });

      // Lấy các category không bị chặn (isBlocked = null)
      const categories = await Category.find({ isBlocked: null });

      res.status(200).json({
         success: true,
         categories,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during fetchAllCategory.",
      });
   }
};


const addCategory = async (req, res) => {
   const { name, description } = req.body;
   try {
      const newCategory = new Category({
         name,
         description,
      });
      await newCategory.save();
      res.status(201).json({
         success: true,
         message: "Category added successfully.",
         category: newCategory,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during addCategory.",
      });
   }
};

const editCategory = async (req, res) => {
   const { name, description } = req.body;
   const { id } = req.params;
   try {
      const updatedCategory = await Category.findByIdAndUpdate(
         id,
         { name, description, updatedAt: new Date() },
         { new: true }
      );
      if (!updatedCategory) {
         return res.status(404).json({
            success: false,
            message: "Category not found.",
         });
      }
      res.status(200).json({
         success: true,
         message: "Category updated successfully.",
         category: updatedCategory,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during editCategory.",
      });
   }
};

const isBlockedCategory = async (req, res) => {
   const { id } = req.params;
   const { active } = req.body;
   try {
      const category = await Category.findById(id);
      if (!category) {
         return res.status(404).json({
            success: false,
            message: "Category not found.",
         });
      }

      if (active === "block") {
         category.isBlocked = new Date();
      } else if (active === "unblock") {
         category.isBlocked = null;
      } else {
         return res.status(400).json({
            success: false,
            message: "Invalid active status.",
         });
      }

      await category.save();
      res.status(200).json({
         success: true,
         message: `Category successfully ${active === "block" ? "blocked" : "unblocked"}.`,
         category,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during isBlockedCategory.",
      });
   }
};

module.exports = {
   fetchAllCategory,
   addCategory,
   editCategory,
   isBlockedCategory,
};
