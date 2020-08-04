const mongoose = require('mongoose')
const Category = require('../category')
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.error('mongodb error!')
})

db.once('open', () => {
  Category.create({ food: true })
  console.log('mongodb connected!')
})