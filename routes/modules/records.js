const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

// create page
router.get('/new', (req, res) => {
  res.render('new')
})

// create function
router.post('/', (req, res) => {
  const { name, category, date, amount } = req.body

  // 漏填資料提示
  if (name.length === 0 || category.length === 0 || date.length === 0 || amount.length === 0) {
    const alert = '請確實填寫每個項目'
    return Record.find()
      .lean()
      .then(
        res.render('new', { alert })
      )
      .catch(error => console.log(error))
    // 金額錯誤提示
  }
  else if (amount !== Number) {
    const amountAlert = '金額請輸入數字,如 1200 '
    return Record.find()
      .lean()
      .then(
        res.render('new', { amountAlert })
      )
  }
  return Record.create({ name, category, date, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

// edit update function
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, category, date, amount } = req.body
  console.log('日期', req.body.mouth)

  return Record.findById(id)
    .then(record => {
      record = Object.assign(record, req.body)
      return record.save()
    })


    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

// delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router