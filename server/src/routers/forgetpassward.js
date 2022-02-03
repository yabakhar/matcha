const router = require('express').Router()
const db = require('../database/database.js')
const helpers = require("../helpers/sendEmail")
const jwt = require('jsonwebtoken');
router.post("/forgetpassword",(req, res) => {
    const {email} = req.body
    db.query('SELECT email FROM users WHERE email=?', [email], function (err, result, fields) {
        if (err) 
           {
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            );
           }
        else
        {
            try {
                if (result.length == 1)
                {
                    const token = jwt.sign({email},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '24h'});
                    helpers.sendEmail("ForgetPassword", token,email);
                    return res.status(200).json({
                        status: 200,
                        message: "Email was send.",
                    });
                }
                else
                    return res.status(400).json({
                        status: 400,
                        message: "email Not Found",
                    });
            } catch (error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        }
      });
});
module.exports = router;