const helpers = require("../helpers/calc_tow_point")
const db = require('../database/database.js')
exports.controle = (lon,lat) => {
    db.query("SELECT id,lat,lon from users",function (err, result, fields) {
        if (err) {
            return err;   
        }
        try {
            console.log(ddd(result,lon,lat));
           return ddd(result,lon,lat)
        } catch (error) {
            return error;
        }
    });   
}
function ddd(result,lon,lat) 
{
    var o = 0
    const distance = [];
    while (result.length > o) {
        distance.push({
            'id':result[o].id,
            'distance': helpers.calcCrow(result[o].lat,lat,result[o].lon,lon)
        })
        // console.log(helpers.calcCrow(result[o].lat,lat,result[o].lon,lon));
       o++;
    }
    return distance.sort((a, b) => a.distance - b.distance);
}
