/**
 * router.js路由模块
 * 职责：
 *  处理路由
 *  根据不同请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 划分模块的目的是为了增强项目代码的可维护性
 * 提升开发效率吧
 */

const fs = require('fs')
const students = require('./students')

// Express提供了更好的方式，专门用来包装路由
const express = require('express')

// 1、创建一个路由容器
const router = express.Router()

// 2、把路由挂载到router路由容器中
router.get('/students', (req, res) => {
  // readfile的第二个参数 传入utf8就是告诉他把读取到的文件直接按照utf8编码转成我们能认识的字符
  // 除了这样来转换之外，也可以通过data.toString()的方式

  students.find((err, students) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子'
      ],
      // 从文件中读取到的是字符串，这里需要json手动转成对象
      students: students
    })
  })
})

router.get('/students/new', (req, res) => {
  res.render('new.html')
})

router.post('/students/new', (req, res) => {
  // 1、获取表单数据
  // 2、处理
  //  将数据保存到db.json文件中用以持久化
  // 3、发送响应
  // 先读取出来转为对象
  // 然后往对象中push
  // 然后把对象转为字符串
  // 再将字符串写入文件中
  students.save(req.body, (err) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.redirect('/students')
  })
})

router.get('/students/edit', (req, res) => {
  // 1、在客户端的列表中处理连接问题，需要yo有id参数
  // 2、获取要编辑的学生的id
  // 3、渲染编辑页面
  //  根据id将学生信息查出来
  students.findById(parseInt(req.query.id), (err, student) => {
    if (err) {
      res.status(500).send('Server error')
    }
    res.render('edit.html', {
      student: student
    })
  })
})

router.post('/students/edit', (req, res) => {
  // 1、获取表单数据
  // 2、更新
  //  students.update()
  // 3、发送响应
  students.updateById(req.body, (err) => {
    if (err) {
     return res.status(500).send('Server error')
    }
    res.redirect('/students')
  })
})

router.get('/students/delete', (req, res) => {
  console.log(req.query.id)
  students.deleteById(JSON.parse(req.query.id), (err) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.redirect('/students')
  })
})

// 3、把router导出
module.exports = router

