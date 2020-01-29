/**
 * app.js入口模块
 * 职责： 
 *  启动服务
 *  做一些服务相关配置
 *    模板引擎
 *    body-parser解析表单post请求体
 *    提供静态资源服务
 *  挂载路由
 *  监听端口启动服务
 */

const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

app.use('/node_modules', express.static('./node_modules/'))
app.use('/public', express.static('./public/'))
app.engine('html', require('express-art-template'))
// 配置模板引擎一定要在app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 把路由容器挂载到app服务器中
app.use(router)

app.listen(3000, () => {
  console.log('server is running')
})