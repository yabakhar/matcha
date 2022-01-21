const router = require('express').Router()
const db = require('../database/database.js')
router.post("/completeProfile", (req, res) => {
    const {lastname, firstname} = req.body
    db.query('ALTER TABLE users ADD lastname =? varchar(10),firstname =? VARCHAR(10)', [lastname, firstname], function (err, result, fields) {
        if (err) 
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            )
        else
        {
            console.log(lastname + firstname);
        }
      });
});
module.exports = router;