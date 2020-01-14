// 在apache案例中加入模板引擎
const http = require('http')
const fs = require('fs')
const template = require('art-template')

// 1、创建server
const server = http.createServer()
const wwwDir = 'C:/wwwDir'
// 2、监听server的request请求，设置请求参数
server.on('request', (req, res) => {
  let url = req.url
  fs.readFile('./07-template.html', (err, data) => {
    if (err) {
      return res.end('404')
    } 
    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end('Can not find www dir')
      }

      // 使用模板引擎解析替换data中的模板字符串
      // 数据就是files
      // 然后去对应的html文件中编写模板语法就可以了
      let htmlStr = template.render(data.toString(), {
        files: files
      })
      res.end(htmlStr)
    })
  })
})



// 3、绑定端口号，启动服务
server.listen(3000, () => {
  console.log('server is running')
})