const db = require("../database/database.js");
const user_exist = (req, res, next) => {
    const {email, password} = req.body
    db.query('SELECT * FROM users WHERE email =?', [email], function (err, result, fields) {
        if (err) 
            return res.status(500)
            .json(
                {
                    status: "error",
                    message: "Database error",
                }
            )
        else
        {
            if (result.length > 0) {
                return res.status(401)
            .json(
                {
                    status: "error",
                    message: "email deja exist !",
                }
            )
            } else {
               next();
            }
        }
      });
};
module.exports = user_exist;