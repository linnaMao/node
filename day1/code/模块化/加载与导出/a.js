// require两个作用
//  1、加载文件模块并执行里面的代码
//  2、拿到被加载文件模块导出的接口对象

//  在每个文件模块中都提供了一个对象： exports
//  exports默认是一个空对象
//  需要做的是将所有需要被外部访问的成员加载到exports中
let ret = require('./b')

console.log(ret.add(10, 20))
