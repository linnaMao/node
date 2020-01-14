// art-template 不仅可以在浏览器使用，也可以在node中使用

// 在node中引用模板引擎

const template = require('art-template')
const fs = require('fs')

fs.readFile('./tpl.html', (err, data) => {
  if (err) {
    return console.log('读取失败')
  } 
  // 默认读取到data是二进制数据
  // 而模板引擎的render方法需要接受的是字符串
  // 所以我们在这里需要把data二进制数据转为字符串才可以给模板引擎使用
  let ret = template.render(data.toString(), {
    name: 'jack',
    age: 18,
    province: '杭州市',
    hobbies: [
      '写代码',
      '唱歌',
      '打游戏'
    ]
  })
  console.log(ret)
})

