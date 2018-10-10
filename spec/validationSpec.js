var validation = require('../src/validation');

describe('Validation', function () {
  var validate;

  beforeEach(function() {
    validate = new validation();
  });

  it("should return true", function() {
    expect(validate.authenticateUser('makers', 'password')).toEqual(true)
  });
});
