const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    if (req.headers['authorization']) {
        token = req.headers['authorization'].replace("Bearer ", '');
        try {
            const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if (id)
            {
                Object.assign(req.body,id);
                next();
            }
        } catch (err) {
            res.status(401).json(
                {
                    "status": "error",
                    "message": "unauthorized"
                }
            )
        }
    } else {
        res.status(401).json(
            {
                "status": "error",
                "message": "unauthorized"
            }
        )
    }
}

module.exports = auth;