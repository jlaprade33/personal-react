const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sendEmail', async function(req, res, next) {
  let emailInfo = req.body;
  console.log('req.body', emailInfo);
  const message = emailInfo.info

  // let testAccount = await nodemailer.createTestAccount();

  let transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
       user: content-blocked,
       pass: content-blocked
    }
  })

  let info = await transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  })

  console.log('Info', info)

  res.send('Email sent.');
});

module.exports = router;
