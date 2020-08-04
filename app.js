const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/edit', (req, res) => {
  res.render('edit')
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`The app is running on localhost:${port}`)
})

