// function Validation() {
//
// }

module.exports = {
  authenticateUser: function(user, password) {
    if (user === 'makers' && password === 'password') {
      return true;
    } else {
      return false;
    }
  }

};
