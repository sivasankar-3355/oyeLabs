const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
      name:{
          type: String,
          required: [true, 'Name is required field'],
          maxLength: 30
      },
      phoneNumber:{
          type: String,
          required: [true, 'Phone number is required field'],
          minLength: 10
      }
})

module.exports = mongoose.model('Customer', customerSchema)