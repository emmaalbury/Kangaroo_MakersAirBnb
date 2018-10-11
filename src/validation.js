function Validation() {

}
Validation.prototype.authenticateUser = function(user, password) {
  if (user === 'makers' && password === 'password') {
    return true;
  } else {
    return false;
  }
}


// var finduser = require('finduser')
// const find = require('./username')
var bodyParser = require('body-parser');
const User = require('../users')

module.exports = {
  authenticateUser: function(username, password) {
    console.log('username:');
    console.log('password:');
    // console.log(User.find({username: username}).password);
    if (username === User.find({username: username}) && password === User.find({username: username}).password ) {
      return true;
    } else {
      return false;
    }
  }
};
