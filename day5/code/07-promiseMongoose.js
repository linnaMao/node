const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 1、连接数据库
// 指定连接的数据库不需要已经存在，会在插入第一条数据之后自动被创建
mongoose.connect('mongodb://localhost/test')

// 2、设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据

let useSchema = new Schema({
  username: {
    type: String,
    require: true 
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: false
  }
})

// 3、将文档架构发布为模型
// mongoose.model方法就是用来将一个架构发布于model的
// 第一个参数： 传入一个大写名词单数字符串用来表示你的数据库名称
//              mongoose会自动将大写名称的字符串生成小写复数的集合名称
//              例如这里的User会变为users集合名称
// 第二个参数： 架构Schema
// 返回值： 模型构造函数
const User = mongoose.model('User', useSchema);

// // 4、当有了模型构造函数之后，就和以使用这个构造函数对users集合中的数据增删改查

// 新增数据
const admin = new User({
  username: 'lisi',
  password: '12345',
  email: '123@123.com'
})

// admin.save(function(err, ret) {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })

// 查询数据
// 查询所有
// User.find()
//   .then((data) => {
//     console.log(data)
//   })

User.findOne({
  username: 'admin'
})
.then((user) => {
  if (user) {
    console.log('用户已存在')
  } else {
    return new User({
      username: 'aaa',
      password: '123',
      email: 'dadada'
    }).save((err, data) => {
      console.log(data)
    })
  }
})

// 查询部分
// findOne为查询一个，如果没有条件则查询第一个
// User.findOne({
//   username: 'lisi'
// }, (err, ret) => {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log('查询成功')
//     console.log(ret)
//   }
// })

// 删除数据

// User.remove({
//   username: 'lisi'
// }, (err, ret) => {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功')
//     console.log(ret)
//   }
// })


// 更新数据
// User.findByIdAndUpdate('5e301d22955ca339cc7e6ad0', {
//   password: '123'
// }, (err, ret) => {
//   if (err) {
//     console.log('更新失败')
//   } else {
//     console.log('更新成功')
//     console.log(ret)
//   }
// })

