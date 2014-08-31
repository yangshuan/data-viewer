var express = require('express');
var router = express.Router();

router.url = '/upload';

router.get('/', function(req, res) {
  res.render('upload', { title: 'upload' });
});

module.exports = router;
