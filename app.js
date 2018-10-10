const express = require('express')
const app = express()
const port = 3000
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validation = require('./src/validation');


app.set('view engine','ejs')
app.use(cookieParser());
app.use(session({secret: 'hello'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.render('index', {name: req.session.username, email: req.session.userID}));

app.get('/hi', function(req, res) {
  req.session.user = 'sophie';
  res.render('signup')
})



app.get('/anything', function(req, res) {
  res.send(req.session.user)
})

app.post('/signup', function(req, res) {
  console.log(req.body);
  console.log(validation.authenticateUser(req.body.name, req.body.email))
  if (validation.authenticateUser(req.body.name, req.body.email)); {
    req.session.username = req.body.name
    req.session.userID = req.body.email
  }
  res.redirect('/')
})


app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
