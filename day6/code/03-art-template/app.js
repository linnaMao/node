const express = require('express')
const app = express()

app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(5000, () => {
  console.log('server is running')
})