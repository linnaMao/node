// 应用程序
// 为了方便处理静态资源，所以静态资源存在在public中
// 哪些资源被用户访问和哪些资源不能被用户访问，可以通过代码来进行灵活的管理

const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

let comments = [
  {
    name: '毛栗子',
    message: '今天天气不咋地',
    dateTime: '2020-01-15'
  },
  {
    name: '毛栗子1',
    message: '今天天气不咋地',
    dateTime: '2020-01-15'
  }
]

// comments?name=毛丽真&message=1232的
// 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
// 所以不可能通过去判断url路径来处理这种请求
// 结论： 对于我们来说，其实只需要判定：如果请求的路径是/comments的时候，那就认为提交表单的请求过来了

http
  .createServer((req, res) => {
    // 使用url.parse方法将路径解析为一个方便操作的对象，
    // 第二个参数为true表示直接将查询字符串转为对象（通过query属性访问）
    const parseObj = url.parse(req.url, true)
    
    // 单独获取不包含查询字符串的路径（该路径不包含？之后的信息）
    const pathname = parseObj.pathname
    if (pathname === '/') {
      fs.readFile('./views/index.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        let htmlStr = template.render(data.toString(), {
          comments: comments
        })
        res.end(htmlStr)
      })
    } else if (pathname === '/post') {
      fs.readFile('./views/post.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    } else if (pathname.indexOf('/public') === 0) {
      //  /public/css/main.css
      // 统一处理： 如果请求路径是以 /public开头的
      // 可以直接把请求路径作为文件路径直接来读取
      fs.readFile('.' + pathname, (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    } else if (pathname === '/comments') {
      // 使用url模块的parse方法把请求路径中的字符串给解析成一个对象
      // 1、获取表单数据
      // 2、将当前日期添加到数据对象中，存储到数组中
      // 3、让用户重定向跳转到首页 /
      //    当用户重新请求/的时候，数据中的数据已经发生变化了，所以用户看到的页面也就变化了

      const comment = parseObj.query
      comment.dateTime = '2020-01-15 11:37:22'
      comments.unshift(comment)
      // 服务端已经将数据存储好了，接下来就是让用户重新请求/首页 就可以看到最新的留言内容
      // 通过服务器让用户重定向：
      // 1、状态码设置为302临时重定向
      // 2、在响应头中通过Location告诉客户端往哪里重定向
      // 如果客户端发现服务器的响应的状态码是302就会自动去响应头中找location，然后对该地址发起新的请求
      // 所以就能看到客户端自动跳转了
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } else {
      fs.readFile('./views/404.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    }
})
  .listen(3000, () => {
    console.log('server is running...')
  })