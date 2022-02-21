const mysql = require("mysql");
const db = mysql.createConnection({
    // host: "192.168.99.103",
    // password: "tiger",
    host: "localhost",
    user: "root",
    password: "tiger",
    database: "mydb",
    multipleStatements: true,
});
db.connect((err) => {
    if (err) {
        console.log(`err ${err}`);
    } else console.log("ana mconnece");
});
module.exports = db;
