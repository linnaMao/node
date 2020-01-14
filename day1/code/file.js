// node.js具有文件操作的能力，在node中如果想要进行文件操作，要引入fs核心模块（提供了文件操作的API）
// 1、使用require方式加载fs核心模块
let fs = require('fs')

// 2、读取文件路径
// 第一个参数：读取文件路径
// 第二个参数：回调函数 
// 成功： data： 对象； error： null
// 失败： data： undefined(没有数据) error： 错误对象
fs.readFile('../remark.md', (error, data) => {
  console.log(data)
  // <Buffer 2d 57 65 62 e5 90 8e e5 8f b0 e6 9c 8d e5 8a a1 e5 99 a8 ef bc 88 e9 bb 91 e7 9b 92 e5 ad 90 ef bc 89 0d 0a 20 20 2b 6a 61 76 61 0d 0a 20 20 2b 50 48 ... 981 more bytes>
  // 文件中存储的是二进制的0和1，这里将二进制转换为16进制，但无论是二进制还是十六进制人类都不认识
  // 需要使用toString()进行转化
  if (error) {
    console.log('读取文件失败')
    return
  }
  console.log(data.toString())
})

// 3、写文件
// 第一个参数： 写文件的路径
// 第二个参数： 内容
// 第三个参数： 回调函数
// 文件写入成功： error为null
// 文件写入失败： error为错误对象
fs.writeFile('../node.md', '你好',(error) => {
  error?console.log('文件写入失败'):console.log('文件写入成功')
})


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
server.on('request', () => {
  console.log('收到客户端请求')
})
// 4、绑定端口号，启动服务器
server.listen(3000, () => {
  console.log('服务器启动成功，可以启动http://127.0.0.3000/来进行访问')
})

