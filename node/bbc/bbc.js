const express = require('express')
const app = express()
const port = 8081

let users = [
  {
    id: '1',
    name:'lily',
    password:'123',
    email:'lily@qq.com',
    avatar:'./avatoars.32423.png',
  },
  {
    id: '2',
    name:'hify',
    password:'123',
    email:'hify@qq.com',
    avatar:'./avatoars.32423.png',
  }
]
let posts = [
  {
    title: 'A',
    content: 'aaa',
    createdAt: Date.now(),
    ownerId: 1,
    commentCount:0,
  },
  {
    title: 'B',
    content: 'bbb',
    createdAt: Date.now(),
    ownerId: 2,
    commentCount:0,
  }
]

app.use(express.urlencoded())

app.get('/', (req,res,next) => {

})
