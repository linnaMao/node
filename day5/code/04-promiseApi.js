const fs = require('fs')

// 在es6中新增了一个API promise
// Promise是一个构造函数
 
// 创建Promise容器
// 1、给别人一个承诺
//  Promise一旦创建，就开始执行里面的代码
function read(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // 容器中的承诺失败了
        // 将容器中的pending状态改为失败
        reject(err)
      } else {
        // 成功
        // 将容器中的pending状态改为成功
        // 这里调用的resolve方法实际就是then方法传递的函数
        resolve(data)
      }
    })
  })
}
const p1 = read('./data/a.txt')
const p2 = read('./data/b.txt')
const p3 = read('./data/c.txt')

// then方法第一个参数接受的function就是容器中的resolve函数
// 第二个参数接受的function是容器中的reject函数
p1
  .then((data) => {
    console.log(data)
    // return 一个promise对象
    // 当return一个promise对象时，后续的then中的第一个参数会作为p2的resolve
    return p2
  })
  .then((data) => {
    console.log(data)
    return p3
  })
  .then(data => {
    console.log(data)
    return 123
  })