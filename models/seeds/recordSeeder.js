const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '午餐',
      category: 'food',
      date: '2020-08-02',
      amount: '200',
    },
    {
      name: '貓跳台',
      category: 'home',
      date: '2020-08-02',
      amount: '2000'
    },
    {
      name: '捷運',
      category: 'transportation',
      date: '2020-08-02',
      amount: '25'
    },
    {
      name: '電影',
      category: 'entertainment',
      date: '2020-08-02',
      amount: '230'
    },
    {
      name: '贍養費',
      category: 'other',
      date: '2020-08-02',
      amount: '20000'
    }
  )
  console.log('record mongodb connected!')
})
