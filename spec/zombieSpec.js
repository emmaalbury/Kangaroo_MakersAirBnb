const Browser = require('zombie');

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

    describe('is a homepage', function(){
      it('should have a registration link',function(){
        browser.pressButton('Registration');
        browser.assert.url('http://localhost/Registration');
      });
    });

});
