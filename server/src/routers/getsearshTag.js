const router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
router.post("/getsearchtag", auth,(req, res) => {
    const { tag } = req.body
    db.query("SELECT tag FROM tags WHERE tag LIKE '"+tag+"%'", function (err, result, fields) {
        if (err) {
            return res.status(400)
                .json(
                    {
                        status: 400,
                        message: "Database error" + err,
                    }
                )
        }
        else {
            if (result.length > 0)
            {
                uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
                return res.status(200).json({status:200,result:uniqueArray(result)});
            }
            else
                return res.status(200).json({status:200,result:""});
        }
    });
});
module.exports = router;