const express = require('express')

const app = express()

// 除了以上中间件之外，还有一种最常用的
// 匹配请求方法和请求路径的中间件

app.get('/ab', (req, res, next) => {
  req.foo = 'bar'
  console.log('a1')
  next()
})

app.get('/ab', (req, res, next) => {
  console.log('a2')
  console.log(req.foo)
})

app.listen(3000, () => {
  console.log('server is running')
})

