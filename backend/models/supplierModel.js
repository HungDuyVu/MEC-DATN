const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
   name: { type: String, required: true },
   contactInfo: {
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true }
   },
   productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
   address: { type: String, required: true },
   isBlocked: { type: String, default: null },
   description: { type: String },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
