const mysql = require("mysql");
const db = mysql.createConnection({
<<<<<<< HEAD
    // host: "192.168.99.105",
    // host: "localhost",
=======
    host: "192.168.99.105",
>>>>>>> 430ae16e2287a2d6f85aa2df520e3c32672e5eb9
    // host: "192.168.99.104",
    // host: "localhost",
    user: "root",
    // password: "tiger",
    password: "root",
    database: "mydb",
    multipleStatements: true,
});
db.connect((err) => {
    if (err) {
        console.log(`err ${err}`);
    } else console.log("ana mconnece");
});
module.exports = db;
