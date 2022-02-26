const router = require("express").Router();
const db = require("../database/database.js");
const auth = require("../middlewares/auth");
router.post("/completeProfile", auth, (req, res) => {
    console.log(req.body);
    const {
        location,
        sexualPreferences,
        firstName,
        lastName,
        gender,
        biography,
        birthdate,
        avatar,
        id,
        listOfInterests,
        gallery,
    } = req.body;
    const tags = [];
    const photos = [];
    listOfInterests.forEach((element) => {
        tags.push([id, element]);
    });
    gallery.forEach((element) => {
        photos.push([id, element]);
    });
    db.query(
        "UPDATE users SET complete=?,first_name=?,last_name=?,gender=?,orientation=?,biography=?,lat=?,lon=?,birthdate=?,avatar=? WHERE id=?;INSERT INTO tags(iduser,tag) VALUES ?;INSERT INTO photos(iduser,photo) VALUES ?",
        [
            1,
            firstName,
            lastName,
            gender,
            sexualPreferences,
            biography,
            location.lat,
            location.lng,
            birthdate,
            avatar,
            id,
            tags,
            photos,
        ],
        function (err, result, fields) {
            if (err)
                return res.status(400).json({
                    status: 400,
                    message: "Database error " + err,
                });
            else {
                return res.status(200).json({
                    status: 200,
                    message: "ok"
                });
            }
        }
    );
});
module.exports = router;
