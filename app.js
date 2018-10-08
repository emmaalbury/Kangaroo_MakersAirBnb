const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req, res) => res.render('index'))

app.get('/hi', function(req, res) {
  console.log('hello');
  res.render('signup')
})

app.get('/anything', function(req, res) {
  res.redirect('/hi');
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
