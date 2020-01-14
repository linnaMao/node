// require
// 端口号

// 中文乱码问题
// 在服务器中默认发送的数据，其实是utf-8编码的内容，但是浏览器不知道
// 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
// 中文操作系统默认的 gbk
// 在http协议中，Content-Type是用来告诉对方我给你发送的数据是什么类型


const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  if (url === '/plain') {
    // text/plain是普通文本格式
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello 你好')
  } else if (url == '/html') {
    // text/html是html格式的文本
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<p>hello 世界</p>')
  }
})
 
server.listen(3000, () => {
  console.log('服务器启动成功，可以启动http:127.0.0.1:3000来进行访问')
})

