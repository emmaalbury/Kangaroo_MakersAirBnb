describe ("Validation", function () {
  var validate


  beforeEach(function() {
    validate = new Validation();
  });

  it("should return true", function() {
    expect(validate.authenticateUser('makers', 'password')).toEqual(true)
  });
});
