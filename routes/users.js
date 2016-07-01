var express = require('express');
var router = express.Router();
var Pirate = require('../models/pirate');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //check out my pirate crew
  Pirate.find({}, function(err, pirates){
    if (err) console.log(err);
    res.render('index', {title: 'Pirate log', pirates: pirates})
  })
});


});

module.exports = router;
