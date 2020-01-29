const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/itcast')

let studentSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  gender: {
    type: Number,
    enum: [0, 1], //枚举
    default: 0
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String
  }
})

module.exports = mongoose.model('Student', studentSchema)