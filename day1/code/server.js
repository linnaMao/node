// 使用node构建一个web服务器
// 在node中提供了一个核心模块： http（帮助创建编写服务器的）
// 1、加载http模块
const http = require('http')
// 2、使用http.createServer()创建一个web服务器
// 返回一个server实例
const server = http.createServer()
// 3、服务器提供服务：数据服务
// 发送请求
// 接受请求
// 发送响应
// 注册request请求事件
// 当客户端请求过来时，会自动触发服务器的request，然后运行第二个参数：回调函数
// request请求事件处理函数，需要接受两个参数
// request请求对象：可以获取客户端的请求信息，例如路径
// response响应对象： 给客户端发送响应消息
server.on('request', (request, response) => {
  console.log('收到客户端请求， 请求路径是' + request.url)

  // response对象有一个方法：write可以用来给客户端发送响应数据
  // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
  // 提示服务端，发送数据结束，
  response.end('hello')
})
// 4、绑定端口号，启动服务器
server.listen(3000, () => {
  console.log('服务器启动成功，可以启动http://127.0.0.1:3000/来进行访问')
})

