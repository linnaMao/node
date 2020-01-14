const http = require('http')

// 1、创建server
const server = http.createServer()
// 2、监听require请求事件， 设置请求参数
server.on('request', (require, response) => {
  console.log('收到客户端请求， 请求路径为' + require.url)
  console.log('请求我的客户端的地址：', require.socket.remoteAddress, require.socket.remotePort)
  // response.end("hello")

  // 根据不同的请求路径发动不同的响应结果
  // 1、获取请求路径
  //  require.url获取到的是端口号之后的那一部分路径 所有的url都是以/开头的
  // 2、判断路径处理响应
  const url = require.url
  let products = [
    {
      name: '苹果X',
      price: 8888
    },
    {
      name: '菠萝X',
      price: 5000
    },
    {
      name: '小辣椒X',
      price: 1999
    }
  ]
  switch (url) {
    case '/':
      response.end('xixi')
      break;
    case '/a':
      response.end('haha')
      break
    case '/b': 
      response.end('lala')
      break
    case '/products':
      // 响应内容只能是二进制数据或者字符串
      response.end(JSON.stringify(products))
      break
    default: 
      response.end('404 Not Found')
      break;
  }
})
// 3、绑定端口号，启动服务
server.listen(3000, () => {
  console.log('服务器启动成功，可以启动http://127.0.0.1:3000/来进行访问')
})
