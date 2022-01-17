var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
    auth: {
      user: 'servermatcha7@gmail.com',
      pass: 'Youssef_'
    }
  });
  
  exports.sendEmail = (email, subject) => {
    const mailOptions = {
      from: 'servermatcha7@gmail.com',
      to: email,
      subject: subject,
      text: 'test'
    };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  }
  

 

// module.exports = {sendEmail}; 


//   servermatcha7@gmail.com  |  Youssef_