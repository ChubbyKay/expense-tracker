const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

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


module.exports = router