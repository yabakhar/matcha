const helpers = require("../helpers/calc_tow_point")
const db = require('../database/database.js')
const controle = async (lon,lat,min_age ,max_age,min_dis,max_dis) =>
    new Promise((resolve, reject) => {
        try {
            const array = [];
            db.query("SELECT * from users WHERE rating BETWEEN ? AND ?", [min_age,max_age],(err, res, fields) => {
                if (err)
                    reject(e);
                    array  = getdistence(res,lon,lat);
                resolve();
            });
        } catch (e) {
            reject(e);
        }
    });  
function getdistence(result,lon,lat) 
{
    var o = 0
    const distance = [];
    while (result.length > o) {
        distance.push({
            'id':result[o].id,
            'birthdate':result[o].birthdate,
            'distance': helpers.calcCrow(result[o].lat,lat,result[o].lon,lon)
        })
       o++;
    }
    return distance.sort((a, b) => a.distance - b.distance);
}
module.exports = { controle }