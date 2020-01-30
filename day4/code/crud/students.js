const mongoose = require('mongoose')
const Schema = mongoose.Schema
// 1、连接数据库
mongoose.connect('mongodb://localhost/students')
const studentSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  gender: {
    type: Number,
    enum: [0,1],
    default: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})
// 2、建立模型
module.exports = mongoose.model('Student', studentSchema)
