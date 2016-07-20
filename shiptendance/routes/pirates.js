var express = require('express');
var router = express.Router();
var Pirate = require('../models/pirate');

// DISPLAY ALL PIRATES
router.get('/', function(req, res, next) {
  Pirate.find({}, function(err, pirates) {
    if (err) console.log(err);
    res.render('index', { title: 'Pirates in Attendance', pirates: pirates });
  })
});


// FORM TO CREATE A NEW PIRATE
router.get('/new', function(req, res, next) {
  res.render('new');
});


// CREATE AND SAVE A NEW PIRATE
router.post('/', function(req, res, next) {
  var newPirate = new Pirate({
    name: req.body.name,
    catchphrase: req.body.catchphrase
  })

  newPirate.save(function(err, pirate) {
    if (err) console.log(err);
    res.redirect('/pirates');
  })
});


// DISPLAY SINGLE PIRATE
router.get('/:id', function(req, res, next) {
  var pirateId = req.params.id;
  Pirate.findOne( { _id: pirateId }, function(err, pirate)  {
    if (err) console.log(err);
    res.render('show', { pirate: pirate });
  });
});


// FORM EDIT A PIRATE
router.get('/:id/edit', function(req, res, next) {
  var pirateId = req.params.id;
  Pirate.findOne( { _id: pirateId }, function(err, pirate)  {
    if (err) console.log(err);
    res.render('edit', { pirate: pirate });
  });
});


// EDIT A PIRATE AND UPDATE
router.patch('/:id', function(req, res, next) {
  Pirate.findByIdAndUpdate(req.params.id, req.body, function(err, pirate){
    if (err) console.log(err);
    res.redirect('/pirates/' + req.params.id);
  })
});


// DELETE A PIRATE
router.delete('/:id', function(req, res, next) {
  Pirate.findByIdAndRemove(req.params.id, req.body, function(err, pirate){
    if (err) console.log(err);
    res.redirect('/pirates');
  })
})


module.exports = router;
