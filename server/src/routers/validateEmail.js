const router = require('express').Router()
const jwt = require('jsonwebtoken');
const db = require('../database/database.js')
router.post("/validate_email", (req, res) => {
    const { token } = req.body;
    // console.log(token);
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    db.query('SELECT * FROM users WHERE email =?', [user.email], function (err, result, fields) {
        if (err)
            return res.status(500)
                .json(
                    {
                        status: "error",
                        message: "Database error",
                    }
                )
        else {
            if (result[0].tokenVerify) {
                db.query('UPDATE users SET tokenVerify=? WHERE email=?', ["", user.email], function (err, result, fields) {
                    if (err)
                        return res.status(401)
                            .json(
                                {
                                    status: "error",
                                    message: "Database error",
                                }
                            )
                    else {
                            return res.status(200)
                                .json(
                                    {
                                        status: "valide",
                                        message: "account validtly successfully!",
                                    }
                                )
                        }
                });
            } else {
                return res.status(401)
                .json(
                    {
                        status: "deja",
                        message: "token deja valide",
                    }
                )
            }
        }
    });
});
module.exports = router;
// e  n  f    p