router = require('express').Router()
const helpers = require("../helpers/sendEmail");
const db = require('../database/database.js')
const user_exist = require('../middlewares/user_exist')

console.log(helpers);

router.post("/signup",user_exist, (req, res) => {
    const {email, password,username} = req.body

    db.query(
        "INSERT INTO users(email,password,username) VALUES (?,?,?)",
        [
            email,
            password,
            username
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
            helpers.sendEmail(email,"validate");
        }
    );
});
module.exports = router;