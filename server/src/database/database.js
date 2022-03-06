const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb",
    multipleStatements: true,
});
db.connect((err) => {
    if (err) {
        console.error(`err ${err}`);
    } else console.info("DB is Connected");
});
module.exports = db;
