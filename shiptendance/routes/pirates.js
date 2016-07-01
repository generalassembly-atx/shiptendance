var express = require('express');
var router = express.Router();
var Pirate = require('../models/pirate');

/* GET home page. */
router.get('/', function(req, res, next) {
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index', { title: 'Piratas!', pirates: pirates});
  })
});
//ADD PIRATE FORM
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Suma un pirata:'});
})
//Show Pirate
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Pirate.findOne({_id: id }, function(err, pirate){
    if (err) console.log(err);
    res.render('show', {pirate: pirate})
  })
});

//POST PIRATE
router.post('/', function(req, res, next) {
  var newPirate = new Pirate({
    name: req.body.name,
    catchPhrase: req.body.catchPhrase,
    image_url: req.body.image_url
  });
  newPirate.save(function(err, pirate){
    if (err) console.log(err);
    res.redirect('/pirates');
  });
});

module.exports = router;
