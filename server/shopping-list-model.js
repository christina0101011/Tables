const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = ShoppingList = mongoose.model('ShoppingList', new Schema({
  itemName: String,
  amountDetails: {
    amount: Number,
    units: 'Kg.' | 'G.' | 'L.' | 'Pc.',
    required: false
  },
  price: {
    pricePerUnit: Number,
    currency: String,
    required: false
  },
  comments: {
    type: String,
    required: false
  },
  priority: 'Low' | 'Medium' | 'High',
  done: Boolean,
  metadata: {
    createdAt: {
       type: Date, 
       default: Date.now 
    },
    updatedAt: {
      type: Date, 
      default: Date.now,
      required: false
    },
    deletedAt: {
      type: Date, 
      default: Date.now,
      required: false
    }
  }
}));