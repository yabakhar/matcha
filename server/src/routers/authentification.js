const router = require('express').Router()
const db = require('../database/database.js')
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
const dd = require('../middlewares/dd')
router.post("/authentification",dd, (req, res) => {
    const {username, password} = req.body
    let hashpassword = crypto.createHash('md5').update(password).digest("hex")
    db.query('SELECT * FROM users WHERE username =? AND password =?', [username, hashpassword], function (err, result, fields) {
        if (err) 
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            )
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
                const accesstoken = jwt.sign({username, password},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'});
                try {
                    return res.status(200).json({
                        status: 200,
                        message: "User authenticated!",
                        token: accesstoken,
                    })
                } catch (error) {
                    return res.status(500).json({
                        error: error.message
                    })
                }
            }
        }
      });
});
module.exports = router;