const db = require("../database/database.js");
const user_exist = (req, res, next) => {
    const {email,username} = req.body
    db.query('SELECT * FROM users WHERE email =? OR username =?', [email,username], function (err, result, fields) {
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
            if (result.length > 0) {
                return res.status(401)
            .json(
                {
                    status: 400,
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