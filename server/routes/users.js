var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sendEmail', function(req, res, next) {
  let emailInfo = req.body;
  console.log('req.body', emailInfo);
  res.send(req.body);
});

module.exports = router;
