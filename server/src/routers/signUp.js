router = require('express').Router()
const db = require('../database/database.js')
const user_exist = require('../middlewares/user_exist')
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
                    message: "server error"
                });
            }
            res.status(200).json({
                status: "success",
                message: "User created successfully!"
            });
        }
    );
});
module.exports = router;