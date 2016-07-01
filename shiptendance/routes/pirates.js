var express = require('express');
var router = express.Router();

var Pirate = require('../models/pirate');

/* GET home page. */
router.get('/', function(req, res, next){
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index',{title:'Shiptendance Immersive', pirates : pirates });
  })
});

// NEW
router.get('/new', function(req, res, next){
  res.render('new');
});

router.post('/', function(req, res, next){
  // redirect to index
  var newPirate = new Pirate({
    name: req.body.name,
    catchphrase: req.body.catchphrase
  });

  newPirate.save(function(err, pirate){
    if (err) console.log(err);
    res.redirect('/pirates')
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
