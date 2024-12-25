const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const importInvoiceSchema = new Schema({
   supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
   employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      totalPrice: { type: Number, required: true }
   }],
   importSource: { type: String, enum: ['supplier', 'warehouse'], required: true },
   totalAmount: { type: Number, required: true },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const ImportInvoice = mongoose.model('ImportInvoice', importInvoiceSchema);
module.exports = ImportInvoice;
