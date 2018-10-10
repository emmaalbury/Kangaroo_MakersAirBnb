// var validation = require('/src/validation');

describe('Validation', function () {

  beforeEach(function() {
    validate = new Validation();
  });

  it("should return true", function() {
    expect(validate.authenticateUser('makers', 'password')).toEqual(true)
  });
});
