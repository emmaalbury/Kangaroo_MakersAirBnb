const Browser = require('zombie');
// var url = "http://localhost:3000";
// var browser = new Browser();

// Browser.proxy = 'http://localhost:3000'
//
Browser.localhost('localhost', 3000)

describe('User visits homepage', function(){
  const browser = new Browser();

  beforeEach(function(done) {
    browser.visit('/',done);
  });

  describe('is a homepage', function(){
    it('should have the greetings text',function(){
      browser.assert.text('h1','MakersAirbnb')
    });
  });
});
