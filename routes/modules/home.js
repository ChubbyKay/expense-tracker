const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

// index page
router.get('/', (req, res) => {
  const userId = req.user._id
  Record.find({ userId })
    .lean()
    .then(records => {
      let totalAmount = 0
      if (records.length !== 0) {
        totalAmount = records.map(record => record.amount).reduce((accumulator, currentValue) => accumulator + currentValue)
      }
      Category.find()
        .lean()
        .then(category => { res.render('index', { category, totalAmount, records }) })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router