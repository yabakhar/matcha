router = require('express').Router()
const crypto = require('crypto')
const helpers = require("../helpers/sendEmail");
const db = require('../database/database.js')
const user_exist = require('../middlewares/user_exist')
const jwt = require('jsonwebtoken');
router.post("/signup",user_exist, (req, res) => {
    const {email, password,username} = req.body
    const token = jwt.sign({email},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '24h'});
    let hashpassword = crypto.createHash('md5').update(password).digest("hex")
    db.query(
        "INSERT INTO users(email,password,username,tokenVerify) VALUES (?,?,?,?)",
        [
            email,
            hashpassword,
            username,
            token
        ],
        (err, result, fields) => {
            if (err) {
                return res.status(400).json({
                    status: 400,
                    message: `server error ${err}`
                });
            }
            res.status(200).json({
                status: "success",
                message: "User created successfully!"
            });
            // Send email to the user
            helpers.sendEmail("validate", token,email);
        }
    );
});
module.exports = router;