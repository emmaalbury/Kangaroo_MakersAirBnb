var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected! (Not sure this is needed?)
// });

  var kangaroosers = new mongoose.Schema({
    username: String,
    password: String
  });
// Setup database table

  kangaroosers.methods.details = function () {
    var greeting = this.username
      ? "Hi " + this.username
      : "You're not signed up";
    console.log(greeting);
  }
// greet new user

  var User = mongoose.model('User', kangaroosers);
// define user variable as row in kangaroosers table



  // var kanga = new User({ username: 'makers', password: 'tricky password'});

//var kanga = new User({ username: 'another new person', password: 'tabletennis' });
// setting up a new user with specific user & password, & temporarily adding to the database

  // kanga.save(function (err, kanga) {
  //   if (err) return console.error(err);
  //   // kanga.details();
  // });
  //saves new user to the database

  function deleteuser(){
    User.findOne({username: 'makers'}).remove().exec();
  };
// deletes a userbased on username

//User.findOne({username: 'makers'}).remove().exec();
// deletes 'new person'. Warning! deletes all examples of this username

  function getusersQuery(User){
    var query = User.find({username: 'perfect guest'});
  };
//finds a username and returns it



var query = getusersQuery(User)
  query.exec(function (err, users) {
  users.forEach(function(user){
  });
// returns all usernames & passwords. . Useful for Spaces!!

query.exec

  mongoose.connection.close();
  //closes database connection
  });

  module.exports = User
