var find = require('username');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/27017');

    var kangaroosers = new mongoose.Schema({
      username: String,
      password: String
    });

    var User = mongoose.model('User', kangaroosers);
  // define user variable as row in kangaroosers table

    //
    function getusersQuery(User, user){
      var query = User.find({username: user});
      return query;
    };
  //finds a username and returns it

  var query = User.find({username: 'another new person'})
  query.exec(function (err, users) {
      return 0
    return users[0].password;
    });


//     require 'pg'
// require 'uri'
//
//
//   def self.create(url:, title:)
//     return false unless valid_url?(url)
//
//     if ENV['ENVIRONMENT'] == 'test'
//       connection = PG.connect(dbname: 'bookmark_manager_test')
//     else
//       connection = PG.connect(dbname: 'bookmark_manager')
//     end
//     result = connection.exec("INSERT INTO bookmarks (url, title) VALUES('#{url}', '#{title}') RETURNING id, url, title;")
//     Bookmark.new(id: result[0]['id'], url: result[0]['url'], title: result[0]['title'])
//   end
