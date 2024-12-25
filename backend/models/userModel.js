const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: { type: String, required: true, unique: true, unique: true },
   password: { type: String, required: false },
   role: { type: String, required: true, enum: ["owner", "manager", "sales_staff", "warehouse_staff", "customer"] },
   phone: { type: String, required: true },
   address: { type: String, required: false },
   isBlocked: { type: String, default: null }, // Thời gian khóa, null nếu không bị khóa
   points: {
      type: Number,
      default: 0,
      min: [0, 'Points cannot be negative'],
   },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
