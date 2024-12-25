const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exportInvoiceSchema = new Schema({
   employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   type: { type: String, enum: ['export', 'expense'], required: true },
   products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      totalPrice: { type: Number, required: true }
   }],
   items: [{
      description: { type: String, required: true },
      amount: { type: Number, required: true }
   }],
   exportDestination: { type: String },
   reason: { type: String },
   totalAmount: { type: Number, required: true },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const ExportInvoice = mongoose.model('ExportInvoice', exportInvoiceSchema);
module.exports = ExportInvoice;
