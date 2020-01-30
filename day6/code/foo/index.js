const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/a.txt'), 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
  })

  // ./a.txt相对于当前文件路径是错的
// ./a.txt相对于执行node命令所处的终端路径