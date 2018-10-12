// const testSchema = new Schema({
//   username: { type: String, unique: true },
//   password: { type: String }
// });

describe('Database Tests', function() {

  beforeEach(function (done) {
    // const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/testDatabase');
    // const dbTest = mongoose.connection;
    // dbTest.on('error', console.error.bind(console, 'connection error'));
    // dbTest.once('open', function() {
    //   console.log('Connected to test databse.');
    //   done();
    // });
  });

  describe('Validation', function () {
    var validate = new Validation();
    it("should return true", function() {
      expect(validate.authenticateUser('makers', 'password')).toEqual(true)
    });
  });



  afterEach(function (done) {
    // mongoose.connection.dbTest.dropDatabase(function() {
    mongoose.connection.close(done);
    // });
  });

});

// module.exports = mongoose.model('users', testSchema)
//
// var dbUriTest = process.env.MONGO_URL || 'mongodb://localhost/testing'
// var dbTest = mongoose.connect(dbUriTest);
//
// var dbUri = process.env.MONDO_URL || 'mongodb://localhost/27017'
// var db = mongoose.connect(dbUri);
//
// mongoose.connect('mongodb://localhost/27017');
