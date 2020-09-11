const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

const routes = require('./routes')
const usePassport = require('./config/passport')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
usePassport(app)

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()
})

app.use(routes)


// icon handlebars
Handlebars.registerHelper('ifEquals', function (category, categorySelected, options) {
  return (category === categorySelected) ? options.fn(this) : options.inverse(this)
})

// // category select handlebars
// Handlebars.registerHelper('currentSelected', function (select, currentSelect) {
//   if (select === currentSelect) {
//     return 'selected'
//   }
// })

app.listen(PORT, () => {
  console.log(`The app is running on localhost:${PORT}`)
})

