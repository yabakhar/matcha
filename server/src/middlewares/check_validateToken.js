const jwt = require('jsonwebtoken');
const checkToken = (req, res, next) => {
    const {token} = req.body
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, result)  { 
        if (err) 
            return res.status(400).json({status:400,message:"Token Invalide"})
        else {
            Object.assign(req.body,{payload : result});
            next();
        }
    });
};
module.exports = checkToken;