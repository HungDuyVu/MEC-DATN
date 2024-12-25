const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
   name: { type: String, required: true },
   categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
   supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
   price: { type: Number, required: true },
   storeQuantity: { type: Number, required: true },
   warehouseQuantity: { type: Number, required: true },
   image: { type: String },
   description: { type: String },
   address: { type: String },
   isBlocked: { type: String, default: null },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
