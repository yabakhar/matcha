router = require('express').Router()
const db = require('../database/database.js')
const user_exist = require('../middlewares/user_exist')
router.post("/create",user_exist, (req, res) => {
    const {email, password} = req.body
    console.log("=========email===========>>>>>" + email);
    console.log("===========password=========>>>>>" + password);
    db.query(
        "INSERT INTO users(email,password) VALUES (?,?)",
        [
            email,
            password
        ]
    );
    res.status(200).json({
        status: "success",
        message: "User created successfully!"
    });
});
module.exports = router;