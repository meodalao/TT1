const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app =express();
var http = require('http');
var server =http.server(app);


express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('HTML', path.join(__dirname, 'HTML'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('Homepage/index.HTML'))
  server.listen(PORT, () => console.log(`Listening on ${ PORT }`))
