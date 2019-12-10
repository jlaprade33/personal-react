var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/userInfo', function(req, res, next) {
  let userInfo = req.body;
  console.log('req.body', userInfo);
  res.send(req.body);
});

module.exports = router;
