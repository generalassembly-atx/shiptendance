var mongoose = require('mongoose');

var pirateSchema = new mongoose.Schema({
 name: {type: String, required: true},
 catch_phrase: {type: String, required: true},
 created_at: {type: Date, required: true, default: Date.now}
});

var Pirate = mongoose.model('Pirate', pirateSchema);

module.exports = Pirate;
