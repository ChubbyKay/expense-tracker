const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  const selectCategory = req.query.categoryFilter
  const selectMonth = req.query.monthFilter
  // console.log('selectCategory', selectCategory, 'selectMonth', selectMonth)
  const userId = req.user._id

  return Record.find({ userId, date: { $regex: selectMonth }, category: { $regex: selectCategory } })
    .lean()
    .then(records => {
      let totalAmount = 0
      if (records.length !== 0) {
        totalAmount = records.map(record => record.amount).reduce((accumulator, currentValue) => accumulator + currentValue)
      }
      res.render('index', { selectCategory, selectMonth, records, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router