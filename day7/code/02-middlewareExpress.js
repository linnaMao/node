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
// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// app.use((req, res) => {
//   console.log('请求进来了')
// })

// 中间件本身是一个方法，接受三个参数
//    request请求对象
//    response 响应对象
//    next 下一个中间件
// 当一个请求进入中间件之后，如果不调用next，则会停留在当前中间件
// 所以next是一个方法 用来调用下一个中间件的
// 调用next方法也是要匹配的，不是调用紧挨着的那一个
// app.use((req, res, next) => {
//   console.log(1)
//   next()
// })

// app.use((req, res, next) => {
//   console.log(2)
//   res.send('222 end')
// })

// app.use((req, res, next) => {
//   console.log('1')
//   next()
// })

// app.use('/c', (req, res, next) => {
//   console.log('c')
// })

// 以 /xxx开头 的中间件
// app.use('/a', (req, res, next) => {
//   console.log('a')
//   next()
// })

// app.use((req, res, next) => {
//   console.log('2')
//   next()
// })

// app.use('/a', (req, res, next) => {
//   console.log('b')
// })

// 除了以上中间件之外，还有一种最常用的
// 匹配请求方法和请求路径的中间件

// post
// app.post('/', (req, res, next) => {
//   console.log('a')
//   next()
// })

app.get('/', (req, res, next) => {
  fs.readFile('./df/dfs', (err, data) => {
    if (err) {
      // 当调用next的时候，如果传递了参数，则直接往后找到带有四个参数的应用程序级别中间件
      next(err)
    }
  })
})


// 错误处理中间件

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    err_code: 500,
    message: err.message
  })
})

// 配置一个404中间件


app.listen(3000, () => {
  console.log('server is running')
})

