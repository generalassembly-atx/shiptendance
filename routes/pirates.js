var express = require('express');
var router = express.Router();

var Pirate = require('../models/pirate');

////////////////////
//GET welcome page//
////////////////////

router.get('/', function(req, res, next) {
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index', {title: 'Pirates', pirates: pirates});
  })
});

////////////////////////////
//GET new pirate form page//
////////////////////////////

router.get('/new', function(req, res, next){
  res.render('new', {title: 'Pirates'});
});

////////////////////////////////
// CREATE new pirate from form//
////////////////////////////////

router.post('/', function(req, res, next){
  var newPirate = new Pirate({
    name: req.body.name,
    catch_phrase: req.body.catch_phrase
  });
  newPirate.save(function(err, pirate){
    if (err) console.log(err);
    res.redirect('/pirates')
  })
});

/////////////////////////////////////
// SHOW/GET Unique Pirate User Page//
/////////////////////////////////////

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  Pirate.findOne({_id: id }, function(err, pirate){
    if (err) console.log(err);
    res.render('show', {pirate: pirate})
  })
});

module.exports = router;
