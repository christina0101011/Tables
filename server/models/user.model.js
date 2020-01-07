const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
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
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema)
