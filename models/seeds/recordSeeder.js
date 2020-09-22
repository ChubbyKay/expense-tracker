const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Record = require('../record')
const User = require('../user')
const db = require('../../config/mongoose')

const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

const SEED_EXPENSE = [{
  name: '午餐',
  category: 'food',
  date: '2020-08-02',
  amount: '200',
  merchant: '鼎泰豐',
},
{
  name: '貓跳台',
  category: 'family',
  date: '2020-08-02',
  amount: '2000',
  merchant: 'catLover',
},
{
  name: '捷運',
  category: 'transportation',
  date: '2020-08-02',
  amount: '25',
},
{
  name: '電影',
  category: 'entertainment',
  date: '2020-08-02',
  amount: '230',
  merchant: '國賓',
},
{
  name: '贍養費',
  category: 'other',
  date: '2020-08-02',
  amount: '20000',
  merchant: '年輕的自己',
}]

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 5 },
        (_, i) =>
          Record.create({
            name: SEED_EXPENSE[i].name,
            category: SEED_EXPENSE[i].category,
            date: SEED_EXPENSE[i].date,
            amount: SEED_EXPENSE[i].amount,
            merchant: SEED_EXPENSE[i].merchant,
            userId
          })
      ))
        .then(() => {
          console.log('record mongodb connected!')
          process.exit()
        })
    })
})
