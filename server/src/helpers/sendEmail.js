var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const db = require('../database/database.js')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
    auth: {
      user: 'servermatcha7@gmail.com',
      pass: 'Youssef_'
    }
  });
  
  exports.sendEmail = (email, subject) => {
    const token = jwt.sign({email},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '24h'});
    const link = `${process.env.CLIENT_SERVER}/verify?token=${token}`
    const mailOptions = {
      from: 'servermatcha7@gmail.com',
      to: email,
      subject: subject,
      text: 'test',
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
        db.query('INSERT validatToken(email,Token) VALUES (?,?)', [email, token], function (err, result, fields) {
        if (err) 
          console.log(err);
        else
        {
          console.log(email);
        }
      });
    }
  });
  }
  

 

// module.exports = {sendEmail}; 


//   servermatcha7@gmail.com  |  Youssef_