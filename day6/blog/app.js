const express = require('express')
const path = require('path')

const app = express()
app.engine('html', require('express-art-template'))

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
// app.use('/node_modules/', express.static('./node_modules/'))

app.get('/', (req, res) => {
  res.render('index.html', {
    name: 'linna'
  })
})

app.listen(3000, () => {
  console.log('server is running')
})