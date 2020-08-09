const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// icon handlebars
Handlebars.registerHelper('ifEquals', function (category, categorySelected, options) {
  return (category === categorySelected) ? options.fn(this) : options.inverse(this)
})

app.listen(PORT, () => {
  console.log(`The app is running on localhost:${PORT}`)
})

