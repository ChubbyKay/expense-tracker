// const express = require('express')
// const router = express.Router()

// const Record = require('../../models/record')

// // create page
// router.get('/new', (req, res) => {
//   res.render('new')
// })

// // create function
// router.post('/', (req, res) => {
//   const { name, category, date, amount } = req.body
//   return Record.create({ name, category, date, amount })
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

// // edit
// router.get('/:id/edit', (req, res) => {
//   const id = req.params.id
//   return Record.findById(id)
//     .lean()
//     .then((record) => res.render('edit', { record }))
//     .catch(error => console.log(error))
// })

// // edit update function
// router.put('/:id', (req, res) => {
//   const id = req.params.id
//   return Record.findById(id)
//     .then(record => {
//       record = Object.assign(record, req.body)
//       return record.save()
//     })
//     .then(() => res.redirect(`/`))
//     .catch(error => console.log(error))
// })

// // delete
// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   return Record.findById(id)
//     .then(record => record.remove())
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })


// module.exports = router