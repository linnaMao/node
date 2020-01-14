const http = require('http')
const fs = require('fs')

// 1、创建server
const server = http.createServer()

// 2、监听server的request请求，设置请求参数
server.on('request', (req, res) => {
  const url = req.url
  const wwwDir = 'C:/wwwDir'
  if (url === '/') {
    fs.readFile(wwwDir + '/index.html', (err, data) => {
      if (err) {
        res.end('404 Not Found')
      } else {
        res.end(data)
      }
    })
  }
})

// 3、绑定端口号，启动服务
server.listen(3000, () => {
  console.log('server is running')
})