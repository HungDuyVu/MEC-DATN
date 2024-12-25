const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesInvoiceSchema = new Schema({
   customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      discount: { type: Number, required: true },
      totalPrice: { type: Number, required: true }
   }],
   productTotal: { type: Number, required: true },
   discount: { type: Number, required: true },
   totalDiscount: { type: Number, required: true },
   totalAmount: { type: Number, required: true },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const SalesInvoice = mongoose.model('SalesInvoice', salesInvoiceSchema);
module.exports = SalesInvoice;
