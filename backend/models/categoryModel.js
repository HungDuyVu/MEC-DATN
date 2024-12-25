const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
      },
      description: {
         type: String,
         required: true,
         trim: true,
      },
      isBlocked: {
         type: String,
         default: null,
      },
   },
   {
      timestamps: true,
   }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
