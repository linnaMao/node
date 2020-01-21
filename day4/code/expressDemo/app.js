// 路由就是一个端口，这个表里面有具体的映射关系

const express = require('express')

// 1、创建APP
const app = express()
// 当以/public/开头的时候，去./public/目录中查找资源
// 当省略第一个参数的时候，就可以通过省略/public的方式来查询
app.use('/public/', express.static('./public/'))
// app.use(express.static('./public/'))

app.get('/', (req, res) => {
  // res.end('hello world')
  res.send("send hello world")
})

// 2、
app.listen(3000, () => {
  console.log('express app is running ...')
})