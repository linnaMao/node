// 每次输出结果不一样，不能保证结果的输出
const fs = require('fs')

// 无法保证顺序的代码
function file(url) {
  fs.readFile(url,'utf-8', (err, data) => {
    if (err) {
      // 抛出异常
      //  1、组织程序执行
      //  2、把错误信息打印到控制台
      throw err
    }
    console.log(data)
  })
}

file('./data/a.txt')
file('./data/b.txt')
file('./data/c.txt')

