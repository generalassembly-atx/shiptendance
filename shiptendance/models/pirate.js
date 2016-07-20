var mongoose = require('mongoose');

var pirateSchema = new mongoose.Schema({
  name: { type: String, required: true},
  catchPhrase: { type: String, required: true},
  image_url: String
});
var Pirate = mongoose.model('Pirate', pirateSchema);

module.exports = Pirate;
