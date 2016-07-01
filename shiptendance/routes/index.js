var express = require('express');
var router = express.Router();

var Pirate = require('../models/pirate');

router.get('/', function(req, res, next){
  // index view
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index', { title: 'Shiptendance', pirates: pirates });
  })
});

// NEW
router.get('/new', function(req, res, next){
  res.render('new');
});


// CREATE
router.post('/', function(req, res, next){
  var newPirate = new Pirate({
    name: req.body.name,
    catch_phrase: req.body.catch_phrase
  });
    newPirate.save(function(err, pirate){
    if (err) console.log(err);
    res.redirect('/')
  })
});

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  Pirate.findOne({_id: id }, function(err, pirate){
    if (err) console.log(err);
    res.render('show', {pirate: pirate})
  })
});

module.exports = router;
