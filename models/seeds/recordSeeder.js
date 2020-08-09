const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '午餐',
      category: '餐飲食品',
      date: '2020-8-2',
      amount: '200',
    },
    {
      name: '貓跳台',
      category: '家居物業',
      date: '2020/8/2',
      amount: '2000'
    },
    {
      name: '捷運',
      category: '交通出行',
      date: '2020/8/2',
      amount: '25'
    },
    {
      name: '電影',
      category: '休閒娛樂',
      date: '2020/8/2',
      amount: '230'
    },
    {
      name: '贍養費',
      category: '其他',
      date: '2020/8/2',
      amount: '20000'
    }
  )
  console.log('record mongodb connected!')
})
