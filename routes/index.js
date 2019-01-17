var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();


router.post('/submit', (req, res, next) => {
  console.log(req.body);
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `From: ${name} <br/> email: ${email} <br/> message: ${message} `


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'patrickcorcoran10@gmail.com',
  from: 'patrickcorcoran10@gmail.com',
  subject: 'Question from the P.Corcoran Portfolio Website',
  text: name,
  html: content,
};
sgMail.send(msg)
.then(() => {
  console.log("sent");
})
.catch(error => {

  //Log friendly error
  console.error(error.toString());
});

})

module.exports = router;