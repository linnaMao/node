// 用来获取机器信息的
const os = require('os')
// 用来操作路径的
const path = require('path')
// 获取当前机器cpu信息
console.log(os.cpus())
// memory内存
console.log(os.totalmem())
// extname extension name获取扩展名
console.log(path.extname('c:/a/b/hello.txt'))
