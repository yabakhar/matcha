const router = require('express').Router()
const db = require('../database/database.js')
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
const accountVerification = require('../middlewares/accountVerification')
router.post("/authentification",accountVerification, (req, res) => {
    const {username, password} = req.body
    let hashpassword = crypto.createHash('md5').update(password).digest("hex")
    db.query('SELECT complete,id FROM users WHERE username =? AND password =?', [username, hashpassword], function (err, result, fields) {
        console.log(result);
        if (err) 
           {
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            )
           }
        else
        {
            if (result.length < 1) {
                return res.status(400)
            .json(
                {
                    status: 400,
                    message: "invalid credentials",
                }
            )
            } else {
                try {
                    const id = result[0].id;
                    const accesstoken = jwt.sign({id},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'});
                    return res.status(200).json({
                        status: 200,
                        message: "User authenticated!",
                        complete: result[0].complete,
                        token: accesstoken,
                    })
                } catch (error) {
                    return res.status(400).json({
                        error: error.message
                    })
                }
            }
        }
      });
});
module.exports = router;