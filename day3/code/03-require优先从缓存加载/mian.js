require('./a')

// b已经被加载过了，只是为了得到里面的接口对象,不会重复执行代码
// 提高效率
let fn = require('./b')
console.log(fn)