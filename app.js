const express = require('express')
const app = express()
const port = 3000
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.set('view engine','ejs')
app.use(cookieParser());
app.use(session({secret: 'hello'}));

app.get('/', (req, res) => res.render('index'));

app.get('/hi', function(req, res) {
  req.session.user = 'hello';
  res.render('signup')
  console.log(req.session);
})



app.get('/anything', function(req, res) {
  res.redirect('/hi')
  console.log(req.session);
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
