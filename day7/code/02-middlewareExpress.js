const express = require('express')
const fs = require('fs')
const app = express()

// 中间件： 处理请求的，本质是一个函数

// 在express中，对中间件有几种分类

// 当请求进来，会从第一个中间件开始进行匹配
// 如果匹配，则进来
//    如果请求进入中间件之后，没有调用next则代码会留在当前中间件
//    如果调用了next则继续找到第一个匹配的中间件
// 如果不匹配，则继续判断匹配下一个

// 中间件本身是一个方法，该方法接收三个参数
//    Request： 请求对象
//    Response： 响应对象
//    next： 下一个中间件



// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// app.use((req, res, next) => {
//   console.log('请求进来了')
//   next()
// })
// app.use((req, res) => {
//   console.log('2')
// })

// 关心请求路径的中间件
// app.use('/a', (req, res, next) => {
//   console.log('a1')
//   next()
// })

// app.use('/a/b', (req, res, next) => {
//   console.log('ab')
// })

//严格匹配请求方法和请求路径

app.get('/a', (req, res, next) => {
  console.log('/')
  next()
})

app.get('/a/b', (req, res) => {
  console.log('/a')
})



app.listen(3000, () => {
  console.log('server is running')
})

