const express = require('express')
const bodyParser = require('body-parser')
const comments = [
  {
    name: '毛例子',
    message: '你好',
    dateTime: '2020-01-17 21:18:22'
  },
  {
    name: '毛例子',
    message: '你好',
    dateTime: '2020-01-17 21:20:22'
  },
  {
    name: '毛例子',
    message: '你好',
    dateTime: '2020-01-17 21:30:22'
  }
]
const app = express()

app.use('/public/', express.static('./public/'))
// 配置使用art-template模板引擎、
// 第一个参数表示当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template是专门用来在Express中把art-template整合到express中
// 虽然外面这里不需要记载srt-template，但是也必须安装，因为express-art-template依赖了art-template
app.engine('html', require('express-art-template'))

// express为Respond相应对象提供了一个方法：render
// render方法默认是不可以使用的，但是如果配置了模板引擎就可以使用
// res.render('html模板名'， { 模板数据 })
// 第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
// express开发人员把所有视图文件放在views目录中

// 如果想要修改默认的views目录，则：
// app.set('views', render函数的默认路径)

// 配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index.html', {
    comments:comments
  })
})
app.get('/post', (req, res) => {
  res.render('post.html')
})
app.post('/post', (req, res) => {
  // req.query只能获取get参数
  const comment = req.body
  comment.dateTime = '2020-01-17 21:27:20'
  comments.unshift(comment)
  res.redirect('/')
  // res.statusCode = 302
  // res.setHeader('Location', '/')
  res.send()
})
app.get('*', (eq,res) => {
  res.render('404.html')
})
app.listen(3000, () => {
  console.log('server is running')
})
