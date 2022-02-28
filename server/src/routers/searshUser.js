router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
const helpers = require("../helpers/controleData")
router.get("/searshuser", auth, async (req, res) => {
    const {username} = req.query
        if (username)
        {
            db.query('SELECT users.username,users.first_name,users.last_name,users.gender,users.orientation,users.username,users.biography,users.avatar,users.rating,users.lat,users.lon,users.birthdate,tags.tag,photos.photo FROM users \
            LEFT JOIN tags ON users.id = tags.iduser LEFT JOIN photos ON users.id = photos.iduser WHERE users.username=?', [username], function (err, result,) {
            try {
                if (result.length > 0)
                {
                    return res.status(200)
                    .json(
                        {
                            status: 200,
                            result: result,
                        }
                    );
                }
                else{
                    return res.status(404)
                    .json(
                        {
                            status: 404,
                            message:`${username} NOT FOUND`
                        }
                    );
                }
            } catch (error) {
                return res.status(400)
                .json(
                    {
                        status: 400,
                        message: `Database error ${err}`,
                    }
                )
            }
        }
      
    );
     }else {
        
            return res.status(404)
                .json(
                    {
                        status: 404,
                        message:`NOT FOUND`
                    }
                );
        
     }
});

module.exports = router;