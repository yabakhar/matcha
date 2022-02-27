const router = require('express').Router()
const db = require('../database/database.js')
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
router.post("/authentification", (req, res) => {
    const { username, password } = req.body
    let hashpassword = crypto.createHash('md5').update(password).digest("hex")
    db.query('SELECT complete,id,tokenVerify,lon,lat FROM users WHERE username =? AND password =?', [username, hashpassword], function (err, result, fields) {
        if (err) {
            return res.status(400)
                .json(
                    {
                        status: 400,
                        message: `Database error ${err}`,
                    }
                )
        }
        else {
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
                    const lon = result[0].lon;
                    const lat = result[0].lat;
                    const accesstoken = jwt.sign({ id,lon,lat }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
                    if (result[0].tokenVerify === '') {
                        return res.status(200).json({
                            status: 200,
                            message: "User authenticated!",
                            complete: result[0].complete,
                            token: accesstoken,
                        })
                    }
                    else return res.status(400).send("unauthorized confirm Email First");
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