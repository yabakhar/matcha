
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "10.12.6.10",
    user: "root",
    password: "root",
    database: "mydb"
});
db.connect((err) => {
    if (err) {
        console.log(`err ${err}`);
        
    } else
        console.log("ana mconnece   ");
        
});
module.exports = db