router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
const helpers = require("../helpers/controleData")
router.get("/searshuser", auth, async (req, res) => {
    const {username} = req.query
        if (username)
        {
            db.query(`(SELECT username,first_name,last_name,gender,orientation,username,biography,avatar,rating,lat,lon,birthdate FROM users WHERE username=?) ; \
            (SELECT tag from tags WHERE iduser=(SELECT id from users WHERE username=?)) ; (SELECT photo from photos WHERE iduser=(SELECT id from users WHERE username=?))`, [username,username,username], 
            function (err, result,) {
            try {
                if (result.length > 0)
                {
                    let newResult = {};
                    result.forEach(el => {
                        el.forEach(el1 => {
                            Object.entries(el1).map(subElement => {
                                console.log(subElement);
                                if(newResult[subElement[0]]) {
                                    newResult[subElement[0]].push(subElement[1])
                                }
                                else if (subElement[0] === 'photo') {
                                    newResult[subElement[0]] = [subElement[1]]
                                } 
                                else {
                                    newResult[subElement[0]] = subElement[1]
                                }
                        })
                        })
                    });
                    console.log(newResult);
                    return res.status(200)
                    .json(
                        {
                            status: 200,
                            result: newResult,
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
                        message: `Database error ${error}`,
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