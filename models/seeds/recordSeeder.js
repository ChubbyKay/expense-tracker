const mongoose = require('mongoose')
const Record = require('../record')
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.error('mongodb error!')
})

db.once('open', () => {
  Record.create({ name: '午餐', amount: 200 })
  console.log('mongodb connected!')
})
