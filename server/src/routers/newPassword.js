const router = require('express').Router()
const db = require('../database/database.js')
const crypto = require('crypto')
const checkToken = require('../middlewares/check_validateToken');
router.post("/newPassword", checkToken,(req, res) => {
    const {payload,password} = req.body
    let hashpassword = crypto.createHash('md5').update(password).digest("hex")
    db.query('UPDATE users SET password=? where email=?', [hashpassword,payload.email], function (err, result, fields) {
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
                return res.status(200).json({
                    status: 200,
                    message: "Password Updated.",
                })
            } catch (error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        
        }
      });
});
module.exports = router;
