// 如果是非路径形式的模块标识
// 路径形式的模块
// 绝对路径： 首位的/在这里表示的是当前文件模块所属的磁盘根路径

// 核心模块
// 核心模块的本质也是文件


// 第三方模块
// 凡是第三方模块都必须通过npm来下载
// 使用的时候通过require的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块也不是路径形式的模块
//    先找到当前文件所处目录中的node_modules目录
//    找node_modules/art-template
//    找node_modules/art-template/package.json
//    再去找其中的mian属性
//    mian属性中就记录了art-template的入口模块
//    然后加载使用这个第三方包
//    实际上最终加载的还是文件

//    如果package.json文件不存在或者main指定的入口模块也没有
//    则node会自动找该目录下的index.js
//    也就是index.js会作为一个默认备选项

// 模块查找机制：




let template = require('art-template')
