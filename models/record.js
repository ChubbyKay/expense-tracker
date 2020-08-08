const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    enum: ['家居物業', '交通出行', '休閒娛樂', '餐飲食品', '其他'],
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  }
})

module.exports = mongoose.model('Record', recordSchema)

