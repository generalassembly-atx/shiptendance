var express = require('express');
var router = express.Router();
var Pirate = require('../models/pirate');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //check out my pirate crew

    res.render('index', {title: 'Pirate log', pirates: pirates})
  })
});


});

module.exports = router;
