var mongoose = require('mongoose');

const spacesSchema = new mongoose.Schema({
  space_name        : String,
  space_description : String,
  space_address     : String,
  space_price       : Number
});

var Spaces = mongoose.model('Spaces', spacesSchema);

module.exports = Spaces;
