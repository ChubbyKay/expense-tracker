const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now
  },
  // category: {
  //   type: String,
  //   enum: ['family', 'transportation', 'entertainment', 'food', 'other'],
  //   require: true,
  // },
  amount: {
    type: Number,
    require: false,
  }
})

module.exports = mongoose.model('Record', recordSchema)

