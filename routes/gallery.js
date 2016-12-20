var express = require('express');
var router = express.Router();

/* GET gallery. */
router.get('/', function(req, res, next) {
  res.render('gallery', { title: 'TVG - Gallery' });
});

module.exports = router;
