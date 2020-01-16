//在node中每个模块内部都有自己的一个module对象
// 该module对象中，有一个成员叫：exports
// 如果对外导出成员，只需要把导出的成员挂载到exports

// 默认在代码最后有一个 return module.export
// node为了简化操作，专门提供了一个变量 exports = module.exports

// module.exports.foo = 'foo'

// module.exports.add = function (x, y) {
//   return x+y
// }

// exports = module.exports

// exports.foo = 'foo'

// exports.add = function(x, y) {
//   return x+y
// }
// 导出单个成员的时候
// 直接给exports

// let obj = {}
// let obj1 = obj
// obj.foo = 'hello'
// obj1.foo = 'bar'
// console.log(obj.foo)
// obj1 = {}
// obj1.foo = 'world'

// console.log(obj.foo, obj1.foo)

// exports.a = 1

// exports = {}
// exports.a = 'a'

// module.exports.b = 'b'

// console.log(exports)

// 给exports赋值会断开和module.exports之间的引用
// 同理，给module.exports也会断开和exports的引用
// module.exports = {
//   foo: 'bar'
// }

// exports = module.exports

// exports.foo = 'hello'

exports.foo = 'bar'
module.exports.a = 123

exports = {
  a: 456
}

module.exports.foo = 'haha'
exports.c = 456
exports = module.exports
exports.a = 789

module.exports = 'helllo'
module.exports.a = 'a'
