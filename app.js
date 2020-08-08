const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Record = require('./models/record')
const Category = require('./models/category')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.error('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.use(express.static('public'))


app.get('/', (req, res) => {
  //   // res.render('index')
  Record.find()
    .lean()
    .then(record => res.render('index', { record }))
    .catch(error => console.error(error))

})



app.get('/:id/edit', (req, res) => {
  res.render('edit')
  // return Record.findById(id)
  //   .lean()
  //   .then((record) => res.render('edit', { record }))
  //   .catch(error => console.log(error))
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`The app is running on localhost:${port}`)
})

