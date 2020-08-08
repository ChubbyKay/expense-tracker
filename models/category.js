const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  categoryName: {
    type: String,
    require: false,
  },
  categoryIcon: {
    type: String,
    require: false,
  }
})

module.exports = mongoose.model('Category', categorySchema) 
