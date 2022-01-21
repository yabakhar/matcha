const router = require('express').Router()
const db = require('../database/database.js')
const checkToken = require('../middlewares/check_validateToken')
router.post("/validate_email",checkToken, (req, res) => {
    const { payload } = req.body;
    db.query('SELECT * FROM users WHERE email =?', [payload.email], function (err, result, fields) {
        if (err)
            return res.status(400)
                .json(
                    {
                        status: 400,
                        message: "Database error",
                    }
                )
        else {
            if (result[0].tokenVerify) {
                db.query('UPDATE users SET tokenVerify=? WHERE email=?', ["", payload.email], function (err, result, fields) {
                    if (err)
                        return res.status(400)
                            .json(
                                {
                                    status: 400,
                                    message: "Database error",
                                }
                            )
                    else {
                            return res.status(200)
                                .json(
                                    {
                                        status: 200,
                                        message: "account validtly successfully!",
                                    }
                                )
                        }
                });
            } else {
                return res.status(400)
                .json(
                    {
                        status: 400,
                        message: "token deja valide",
                    }
                )
            }
        }
    });
});

module.exports = router;