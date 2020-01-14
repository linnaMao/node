const fs = require('fs')
fs.readdir('C:/wwwDir', (err, files) => {
  if (err) {
    return console.log('目录不存在')
  }
})