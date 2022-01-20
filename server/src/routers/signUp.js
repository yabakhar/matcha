router = require('express').Router()
const helpers = require("../helpers/sendEmail");
const db = require('../database/database.js')
const user_exist = require('../middlewares/user_exist')
const jwt = require('jsonwebtoken');
router.post("/signup",user_exist, (req, res) => {
    const {email, password,username} = req.body
    const token = jwt.sign({email},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '24h'});
    db.query(
        "INSERT INTO users(email,password,username,tokenVerify) VALUES (?,?,?,?)",
        [
            email,
            password,
            username,
            token
        ],
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
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