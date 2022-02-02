router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
router.get("/affiche", auth, (req, res) => {
    // const {username,password} = req.body
    username = "ccartnera";
    db.query("SELECT users.username,users.id FROM users INNER JOIN photos WHERE users.username=?", [username], function (err, result, fields) {
        try {
            return res.status(200).json({
                status: "success",
                message: "Done",
                users: result,
            })
        } catch (error) {
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            )
        }
      });
});

module.exports = router;