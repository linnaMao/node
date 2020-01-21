/**
 * student.js
 * 数据操作文件模块
 * 职责：
 *  操作文件中的数据，只处理数据，不关心业务
 */
const fs = require('fs')
const dbPath = './db.json'

/**
* 获取所有学生列表
* callback中的参数
* return []
*/
exports.find = (callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

/**
 * 根据id获取学生信息
 */
exports.findById = (id, callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    const students = JSON.parse(data).students
    const ret = students.find(i => i.id === parseInt(id))
    callback(null,ret )
  })
}

/**
* 添加保存学生
*/
exports.save = (student, callback ) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      return callback(err)
    }

    // 将字符串转为数组
    const students = JSON.parse(data).students
    // 处理id唯一的不重复
    student.id =  students[students.length - 1].id + 1
    
    // 把用户传递的对象保存到数组中
    students.push(student)

    // 将文件转为字符串
    const fileData = JSON.stringify({
      students: students
    })

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData ,(err) => {
      if (err) { 
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
 * 更新学生
 */
exports.updateById = (student, callback) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    student.id = parseInt(student.id)
    // 通过id找出所需修改的student
    const stu = students.find(i => i.id === student.id)
    // 替换
    for(let key in student) {
      stu[key] = student[key]
    }
    const fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, (err) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
* 删除学生
*/
exports.deleteById = (id, callback) => {
   fs.readFile(dbPath, (err, data) => {
    if (err) {
      return callback(err)
    }
    const students = JSON.parse(data).students
    const deleteStudent = students.filter(i => i.id !== parseInt(id))
    const fileData = JSON.stringify({
      students: deleteStudent
    })
    fs.writeFile(dbPath, fileData, (err) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
   })
}