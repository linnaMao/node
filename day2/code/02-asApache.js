const http = require('http')
const fs = require('fs')

// 1、创建server
const server = http.createServer()
const wwwDir = 'C:/wwwDir'
// 2、监听server的request请求，设置请求参数
server.on('request', (req, res) => {
  let url = req.url
  let filePath = '/index.html'
  if (url !== '/') {
    filePath = url
    console.log(filePath)
  }
  fs.readFile(wwwDir + filePath, (err, data) => {
    if (err) {
      return res.end('404 Not Found')
    } else {
      res.end(data)
    }
  })
})

// 3、绑定端口号，启动服务
server.listen(3000, () => {
  console.log('server is running')
})