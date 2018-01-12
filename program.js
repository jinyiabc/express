var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.set('views', './views')
app.get('/', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.listen(8000)

//https://pugjs.org/api/getting-started.html
//https://expressjs.com/en/guide/using-template-engines.html
