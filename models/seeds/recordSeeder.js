const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '午餐',
      category: 'food',
      date: '2020-08-02',
      amount: '200',
      merchant: '鼎泰豐'
    },
    {
      name: '貓跳台',
      category: 'family',
      date: '2020-08-02',
      amount: '2000',
      merchant: 'catLover'
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
      merchant: '國賓'
    },
    {
      name: '贍養費',
      category: 'other',
      date: '2020-08-02',
      amount: '20000',
      merchant: '年輕的自己'
    }
  )
    .then(() => {
      console.log('record mongodb connected!')
      db.close()
    })
    .catch(error => console.log(error))
})
