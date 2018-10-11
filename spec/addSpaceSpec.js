const Browser = require('zombie');

Browser.localhost('localhost', 3000)

describe('User visits the add spaces page', function() {

  const browser = new Browser();

  beforeEach(function(done) {
    browser.visit('/addspace', done);
  });

  describe('Add a new space page', function() {
    it('should have a greeting header', function() {
      browser.assert.text('h1', 'Add your space details')
    });
  });
});
