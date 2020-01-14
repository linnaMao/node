// ip地址用来定位计算机
// 端口号用来定位具体的应用程序
// 所有需要联网通信的应用程序都需要占用一个端口号

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  console.log('收到请求了， 请求路径是：' + req.url)
  console.log('收到我的客户端地址是：' + req.socket.remoteAddress, req.socket.remotePort)

  res.end('hello')
})
 
server.listen(3000, () => {
  console.log('服务器启动成功，可以启动http:127.0.0.1:3000来进行访问')
})