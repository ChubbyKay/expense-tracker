const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    require: false,
  },
  date: {
    type: String,
    require: false,
  },
  category: {
    type: String,
    require: false,
  },
  amount: {
    type: Number,
    require: false,
  }
})

module.exports = mongoose.model('Record', recordSchema)

