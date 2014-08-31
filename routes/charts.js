var express = require('express');
var router = express.Router();

router.url = '/charts';

router.get('/bar', function(req, res) {
  res.render('charts/bar', { title: 'charts' });
});

module.exports = router;
