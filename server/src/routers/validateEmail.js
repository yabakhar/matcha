const router = require('express').Router()
const jwt = require('jsonwebtoken');
const db = require('../database/database.js')
router.post("/validate_email", (req, res) => {
   const {token} = req.body;
   console.log(token);
   const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
   db.query('SELECT * FROM validatToken WHERE email =? AND Token =?', [email, token], function (err, result, fields) {
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
            if (result.length == 0) {
                return res.status(401)
            .json(
                {
                    status: "error",
                    message: "email deja exist !",
                }
            )
            }
        }
    });
});
module.exports = router;
// e  n  f    p  