

Validation = function() {

}

Validation.prototype.authenticateUser = function(user, password) {
  if (user === 'makers' && password === 'password') {
    return true;
  } else {
    return false;
  }
}
exports = Validation;

