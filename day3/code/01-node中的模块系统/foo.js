// 防止命名冲突
let foo = 'bor'

function add(x, y) {
  return x+y
}

exports.add = add

// 如果一个模块需要直接导出某个成员，而非挂载的方式
// 必须使用下面这种方式
module.exports = add

// exports是一个对象
// 可以多次为这个对象添加成员