// CONTROLLER
var express = require('express');
var router = express.Router();
var Pirate = require('../models/pirate');


// GET
router.get('/', function(req, res, next){
  // index view
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index', { title: 'Pirates are fun', pirates: pirates });
  })
});

// NEW
router.get('/new', function(req, res, next){
  res.render('new');
});

//gimme a pirate pls 1 pirate pls
router.get('/:id', function(req, res, next){
  var id = req.params.id;
  Pirate.findOne({_id: id }, function(err, pirate){
    if (err) console.log(err);
    res.render('dpirate', {pirate: pirate})
  })
});

// CREATE
router.post('/', function(req, res, next){
  // redirect to index
  var newPirate = new Pirate({
    name: req.body.name,
    catchphrase: req.body.catchphrase
  });

  newPirate.save(function(err, recipe){
    if (err) console.log(err);
    res.redirect('/')
  })
});

module.exports = router;
