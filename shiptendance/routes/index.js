var express = require('express');
var router = express.Router();
var Pirate = require('../models/pirate');

/* GET home page. */
router.get('/', function(req, res, next){
  // index view
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index', { title: 'Pirate Mateys', pirates: pirates });
  })
});

// NEW
router.get('/new', function(req, res, next){
  // get new pirate form
  res.render('new');
});

// CREATE
router.post('/', function(req, res, next){
  // redirect to index
  var newPirate = new Pirate({
    name: req.body.name,
    catchphrase: req.body.catchphrase,
  });

  newPirate.save(function(err, pirate){
    if (err) console.log(err);
    res.redirect('/')
  })
});

// SHOW
router.get('/:id', function(req, res, next){
  var id = req.params.id;
  Pirate.findOne({_id: id }, function(err, pirate){
    if (err) console.log(err);
    res.render('show', {pirate: pirate})
  })
});

router.get('/:id/edit', function(req, res, next){
  // get edit recipe form
  var id = req.params.id;
  Pirate.findOne({_id: id }, function(err, pirate){
    if (err) console.log(err);
    res.render('edit', {pirate: pirate})
  })
});

// UPDATE
router.patch('/:id', function(req, res, next){
  // redirect to show
  Pirate.findByIdAndUpdate(req.params.id, req.body, function(err, pirate){
    if (err) console.log(err);
    res.redirect('/' + req.params.id);
  })
});


// DELETE
router.delete('/:id', function(req, res, next){
  // redirect to index
  Pirate.findByIdAndRemove(req.params.id, req.body, function(err, pirate){
    if (err) console.log(err);
    res.redirect('/');
  })
});

module.exports = router;
