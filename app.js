const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Record = require('./models/record')
const Category = require('./models/category')
const routes = require('./routes')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.error('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)


// // create page
// app.get('/records/new', (req, res) => {
//   res.render('new')
// })

// // create function
// app.post('/records', (req, res) => {
//   const { name, category, date, amount } = req.body
//   return Record.create({ name, category, date, amount })
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

// // edit
// app.get('/:id/edit', (req, res) => {
//   const id = req.params.id
//   return Record.findById(id)
//     .lean()
//     .then((record) => res.render('edit', { record }))
//     .catch(error => console.log(error))
// })

// // edit update function
// app.put('/records/:id', (req, res) => {
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
// app.delete('/records/:id', (req, res) => {
//   const id = req.params.id
//   return Record.findById(id)
//     .then(record => record.remove())
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

app.listen(port, () => {
  console.log(`The app is running on localhost:${port}`)
})

