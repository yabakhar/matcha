router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
const helpers = require("../helpers/controleData")
router.get("/getusers", auth, async (req, res) => {
    const {id,lon,lat} = req.body
    const { offset, min_age ,max_age,min_dis,max_dis} = req.body
    const row_count = 10;
    const page = (offset - 1) * row_count;
    try {
        const result = await helpers.controle(lon,lat,min_age ,max_age,min_dis,max_dis);
        return res.status(200)
        .json(
            {
                status: 200,
                result: result,
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(400)
        .json(
            {
                status: 400,
                message: "Database error",
            }
        )
    }
});

module.exports = router;