const express = require('express')

const app = express()

// 除了以上中间件之外，还有一种最常用的
// 匹配请求方法和请求路径的中间件

// 同一个请求所响应的中间件都是同一个请求对象和响应对象
app.get('/ab', (req, res, next) => {
  if (err) {
    // 当调用next的时候， 如果传递了参数， 则直接往后找到带有四个参数的应用程序级别中间件
    // 当发生错误的时候， 我们可以调用next传递错误对象
    // 然后被全局错误处理中间件匹配到并进行处理
    next(err)
  }
  req.foo = 'bar'
  next()
})

app.get('/ab', (req, res, next) => {
  console.log(req.foo)
})

app.use((err, req, res, next) => {
  console.log('报错了')
})

app.listen(3000, () => {
  console.log('server is running')
})

