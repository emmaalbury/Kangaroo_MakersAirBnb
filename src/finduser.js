

var find = require('username');
    var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/27017');

    var kangaroosers = new mongoose.Schema({
      username: String,
      password: String
    });

    var User = mongoose.model('User', kangaroosers);
  // define user variable as row in kangaroosers table

    //
    function getusersQuery(User, user){
      var query = User.find({username: user});
      return query;
    };
  //finds a username and returns it

  var query = User.find({username: 'another new person'})
  query.exec(function (err, users) {
      return 0
    return users[0].password;
    });
