const Browser = require('zombie');

Browser.localhost('localhost', 3000)

describe('User visits Registration page', function(){
  const browser = new Browser();

  beforeEach(function(done) {
    browser.visit('/Registration',done);
  });

  // describe('goes to spaces page upon successful reg', function(){
  //   it('should go to the spaces page',function(){
  //     browser.pressButton('Register')
  //     browser.assert.url('http://localhost/registration');
  //   });
  // });
    describe('goes to spaces page upon successful reg', function(){
      it('should go to the spaces page',function(){
        browser.fill('username', 'reallygreatuser')
        browser.fill('password', 'password66')
        browser.pressButton('Register')
        browser.assert.url('http://localhost/spaces');
      });
    });
});
