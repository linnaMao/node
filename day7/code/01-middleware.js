// 中间件
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // 解析表单get请求体
  // 解析表单post请求体
  // 解析Cookie
  // 处理session
  // 使用模板引擎
  // console.log(req.query)
  // console.log(req.body)
  // console.log(req.cookies)
  // console.log(req.session)

  // 解析请求地址中的get参数
  const urlObj = url.parse(req.url, true)
  req.query = urlObj.query

  // 解析请求地址中的post参数
  req.body = {
    foo: 'bar'
  }

})

server.listen(3000, () => {
  console.log('server is running')
})