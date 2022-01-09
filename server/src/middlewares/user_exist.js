const db = require("../database/database.js");
const user_exist = (req, res, next) => {
    const {email,username} = req.body
    console.log(req.body);
    db.query('SELECT * FROM users WHERE email =? OR username =?', [email,username], function (err, result, fields) {
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
                    message: "username OR email deja exist !",
                }
            )
            } else {
               next();
            }
        }
      });
};
module.exports = user_exist;