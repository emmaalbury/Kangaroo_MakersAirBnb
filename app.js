const express = require('express')
const app = express()
const port = 3000
const User = require('./users')
const mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validation = require('./src/validation')


app.set('view engine','ejs')
app.use(cookieParser());
app.use(session({secret: 'hello'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/27017');


app.get('/', (req, res) => res.render('index', {name: req.session.username,
                                                password: req.session.password,
                                                login: req.session.login}));

app.get('/registration', function(req, res) {
  res.render('registration')  //render apparently needs to be after you set a session
})


app.post('/registration',function(req,res){
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  req.session.username = req.body.username
  req.session.password = req.body.password
  res.redirect('/')
})


app.post('/login',function(req,res){
  User.findOne({username: req.body.username},function(err,user) {
    if (user == null) {
      req.session.login = "wrong password/username"
      req.session.username = ""
      req.session.password = ""
      res.redirect('/')
    } else if (user.username == req.body.username && user.password == req.body.password) {
      req.session.username = req.body.username
      req.session.password = req.body.password
      req.session.login = ""
      res.redirect('/')
    } else {
      req.session.username = ""
      req.session.password = ""
      req.session.login = "wrong password/username"
      res.redirect('/')
    }
  });
})



app.get('/anything', function(req, res) {
  res.send(req.session.user)
})


  //   User.find({username: 'decent host'}).exec(function (err, users) {
  //
  // })



app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
