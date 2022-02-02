const db = require("../database/database.js");
const accountVerification = (req, res, next) => {
    const {email,username} = req.body
    db.query('SELECT * FROM users WHERE email =? OR username =?', [email,username], function (err, result, fields) {
        if (err) 
        {
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            )
        }
        else
        {
            if (result[0] && result[0].tokenVerify)
            {return res.status(401)
                .json(
                    {
                        status: 401,
                        message: "unauthorized confirm Email First",
                    }
                )}
            else
             next();
        }
      }
    );
};
module.exports = accountVerification;