const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  family: {
    type: Boolean,
    require: false,
  },
  transportation: {
    type: Boolean,
    require: false,
  },
  entertainment: {
    type: Boolean,
    require: false,
  },
  food: {
    type: Boolean,
    require: false,
  },
  other: {
    type: Boolean,
    require: false,
  }
})

module.exports = mongoose.model('Category', categorySchema) 
