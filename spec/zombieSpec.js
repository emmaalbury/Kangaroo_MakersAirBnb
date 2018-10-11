const Browser = require('zombie');

Browser.localhost('example.com', 3000)

describe('User visits homepage', function(){
  const browser = new Browser();

  before(function(done) {
    browser.visit('/',done);
  });

  describe('is a homepage', function(){
    it('should have the hi makers text',function(){
      browser.assert.text('title','hi makers')
    });
  });
});
