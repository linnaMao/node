const http = require('http')
const fs = require('fs')

const server = http.createServer()
const wwwDir = 'C:/wwwDir'

server.on('request', (req, res) => {
  const url = req.url
  fs.readFile('./03-template.html', (err, data) => {
    if (err) {
      return res.end('404 Not Found')
    }
    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end('can not find www dir')
      }
      let content = ''
      files.forEach((item) => {
        content += `
        <tr>
          <td data-value="apple/">
            <a class="icon dir" href="/C:/wwwDir/apple/">${item}</a></td><td class="detailsColumn" data-value="0"></td>
          <td class="detailsColumn" data-value="1578979260">2020/1/14 下午1:21:00</td>
        </tr>
        `
      })
      data = data.toString()
      data = data.replace('a.txt', content)
      res.end(data)
    })
  })
})

server.listen(3000, () => {
  console.log('server is running....')
})