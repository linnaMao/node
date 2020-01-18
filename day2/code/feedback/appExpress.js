const express = require('express')
const fs = require('fs')
const template = require('art-template')

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

app.get('/', (req, res) => {
  fs.readFile('./view/index.html', (err, data) => {
    if (err) {
      return res.send('404 Not Found')
    }
    let strHtml = template.render(data.toString(), {
      comments: comments
    })
    res.send(strHtml)
  })
})
app.get('/post', (req, res) => {
  fs.readFile('./view/post.html', (err, data) => {
    // if (err) {
    //   return res.send('404 Not Found')
    // }
    // res.setHeader('Content-Type', 'text/html; charset-utf-8')
    res.send(data)
    // res.end(data)
  })
})
app.get('/comments', (req, res) => {
  const comment = req.query
  comment.dateTime = '2020-01-17 21:27:20'
  comments.unshift(comment)
  res.statusCode = 302
  res.setHeader('Location', '/')
  res.send()
})

app.listen(3000, () => {
  console.log('server is running')
})