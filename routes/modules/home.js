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

// // category filter query
// router.get('/filter', (req, res) => {
//   const category = req.query.categoryFilter
//   console.log(category)
//   return Category.find()
//     .lean()
//     .then(categories => {
//       Record.find({ category })
//         .lean()
//         .then(record => {
//           let totalAmount = 0
//           for (let i = 0; i < record.length; i++) {
//             totalAmount += record[i].amount
//           }
//           res.render('index', { categories, record, totalAmount })
//         })
//         .catch(error => console.log(error))
//     })
//     .catch(error => console.log(error))
// })





// category filter params
router.get('/filter/:category/:mode', (req, res) => {
  const category = req.params.category
  console.log('req.params', req.params)

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

// mouths filter
// router.get('/filter/:date/:mode', (req, res) => {
//   const date = req.params.date
//   console.log('日期', date)
//   console.log('req.params', req.params)
//   const merchant = req.params.merchant
//   console.log('商家', merchant)
//   const mode = req.params.mode

//   const mouthFilterOption = {
//     january_asc: '1月',
//     february_asc: '2月',
//     march_asc: '3月',
//     april_asc: '4月',
//     may_asc: '5月'
//   }
//   const filterSelected = `${date}_${mode}`

//   Category.find()
//     .lean()
//     .sort({ [date]: [mode] })
//     .then(dateMouth => {
//       Record.find({ mouth })
//         .lean()
//         .then(record => {
//           let totalAmount = 0
//           for (let i = 0; i < record.length; i++) {
//             totalAmount += record[i].amount
//           }
//           res.render('index', { dateMouth, record, totalAmount, mouthFilterOption: mouthFilterOption[filterSelected] })
//         })
//         .catch(error => console.log(error))
//     })
//     .catch(error => console.log(error))
// })

module.exports = router