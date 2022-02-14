const router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
router.post("/completeProfile", auth,(req, res) => {
    const {location,sexualPreferences,firstName , lastName,gender,biography,birthdate,avatar,id} = req.body;
    db.query('UPDATE users SET first_name=?,last_name=?,gender=?,orientation=?,biography=?,lat=?,lon=?,birthdate=?,avatar=? WHERE id=?',[firstName,lastName,gender,sexualPreferences,biography,location.lat,location.lon,birthdate,avatar,id],function (err, result, fields) {
        if (err) 
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error ",
                }
            )
        else
        {
            return res.status(200)
            .json(
                {
                    status: 200,
                    message: "saccses",
                    result:result
                }
            )
        }
      });
});
module.exports = router;

// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
// WHERE CustomerID = 1;
/*
calculate age
*/
// TIMESTAMPDIFF(YEAR, birthdate, CURDATE()) AS age