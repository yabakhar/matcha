const router = require('express').Router()
const jwt = require('jsonwebtoken');

router.post("/validate_email", (req, res) => {
   const {token} = req.body
   console.log(req.body.token + '     ==== >  ');
   const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
   res.status(200).send('Email');
});
module.exports = router;
// e  n  f    p  