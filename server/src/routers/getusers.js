router = require('express').Router()
const db = require('../database/database.js')
const auth = require('../middlewares/auth')
const helpers = require("../helpers/controleData")
router.get("/getusers", auth, (req, res) => {
    const {id,lon,lat} = req.body
    const { offset } = req.body
    const row_count = 10;
    const page = (offset - 1) * row_count;
    helpers.controle(lon,lat);
    // const sql = "SELECT * from users WHERE orientation=Female";
    // const sql = "id BETWEEN 10 AND 20 ";
    // db.query("SELECT * from users WHERE orientation = (select orientation from users where id = ?)",id, function (err, result, fields) {
    //     if (err) {
    //         return res.status(400)
    //             .json(
    //                 {
    //                     status: 400,
    //                     message: "Database error" + err,
    //                 }
    //             )
    //     }
    //     try {
    //         return res.status(200).json({
    //             status: "success",
    //             message: "Done",
    //             users: result,
    //             totalUsers: result.length
    //         });
    //     } catch (error) {
            return res.status(400)
            .json(
                {
                    status: 400,
                    message: "Database error",
                }
            )
    //     }
    //   });
});

module.exports = router;