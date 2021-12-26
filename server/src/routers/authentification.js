const router = require('express').Router()
const db = require('../database/database.js')
const jwt = require('jsonwebtoken');
router.post("/authentification", (req, res) => {
    const {email, password} = req.body
    db.query('SELECT * FROM users WHERE email =? AND password =?', [email, password], function (err, result, fields) {
        if (err) 
            return res.status(500)
            .json(
                {
                    status: "error",
                    message: "Database error",
                }
            )
        else
        {
            if (result.length < 1) {
                return res.status(401)
            .json(
                {
                    status: "error",
                    message: "invalid credentials",
                }
            )
            } else {
                const accesstoken = jwt.sign({email, password},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'});
                try {
                    return res.status(200).json({
                        status: "success",
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