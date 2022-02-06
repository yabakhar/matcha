const router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth');
router.post("/gettag",auth,(req, res) => {
    const { offset , row_count} = req.body
    db.query('SELECT tag FROM tags LIMIT ?,?', [offset,row_count], function (err, result, fields) {
        if (err) {
            return res.status(400)
                .json(
                    {
                        status: 400,
                        message: "Database error",
                    }
                )
        }
        else {
            return res.status(200)
                .json(
                    {
                        status: 200,
                        tags: result,
                    }
                )
        }
    });
});
module.exports = router;