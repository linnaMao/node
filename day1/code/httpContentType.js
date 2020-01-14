// 1、结合fs发送文件中的数据
// 2、不同资源对应的Content-type是不一样的
// osChina
// 图片不需要指定编码

const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  if (url === '/') {
    // 发送文件中的内容
    // 当引用文件内容修改的时候，服务器端不需要重启：每次修改的时候node都是在动态的处理文件
    fs.readFile('./resource/index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset-utf-8')
        res.end('文件读取失败，请稍后重试')
      } else {
        // data是默认的二进制数据，可以通过.toString转为能识别的字符串
        // res.end()支持两种数据类型， 一种二进制，一种字符串
        res.setHeader('Content-Type', 'text/html; charset-utf-8')
        res.end(data)
      }
    })
  } else if (url === '/miqi') {
    // url：统一资源定位符
    // 一个url最终其实是要对应到一个资源的
    fs.readFile('./resource/miqi.jpg', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset-utf-8')
        res.end('文件读取失败，请稍后重试')
      } else {
        // data是默认的二进制数据，可以通过.toString转为能识别的字符串
        // res.end()支持两种数据类型， 一种二进制，一种字符串
        // 图片不需要指定编码，因为我们常说的编码一般指的是字符编码
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})

server.listen(3000, () => {
  console.log('Server is running')
})