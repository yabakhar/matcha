router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
router.get("/getusers", auth, (req, res) => {
    const {id} = req.body
    const { offset } = req.body
    const row_count = 10;
    db.query(" SELECT * from users LIMIT ?, ?; SELECT COUNT(*) AS count FROM users;", [offset, row_count], function (err, result, fields) {
        if (err) {
            console.log(err);
            return res.status(400)
                .json(
                    {
                        status: 400,
                        message: "Database error",
                    }
                )
        }
        try {
            return res.status(200).json({
                status: "success",
                message: "Done",
                users: result[0],
                totalUsers: result[1][0].count
            });
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