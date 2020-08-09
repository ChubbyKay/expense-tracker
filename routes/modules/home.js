const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const record = require('../../models/record')

// index page
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(record => {
      let totalAmount = 0
      for (let i = 0; i < record.length; i++) {
        totalAmount += record[i].amount
      }
      Category.find()
        .lean()
        .then(category => { res.render('index', { category, totalAmount, record }) })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

// filter
router.get('/filter/:category/:mode', (req, res) => {
  const category = req.params.category
  const mode = req.params.mode

  const filterOption = {
    family_asc: '家居物業',
    transportation_asc: '交通外出',
    entertainment_asc: '休閒娛樂',
    food_asc: '餐飲食品',
    other_asc: '其他'
  }
  const filterSelected = `${category}_${mode}`

  Category.find()
    .lean()
    .sort({ [category]: [mode] })
    .then(categories => {
      Record.find({ category })
        .lean()
        .then(record => {
          let totalAmount = 0
          for (let i = 0; i < record.length; i++) {
            totalAmount += record[i].amount
          }
          res.render('index', { categories, record, totalAmount, filterOption: filterOption[filterSelected] })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router