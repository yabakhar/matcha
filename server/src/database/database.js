const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  // host: "192.168.99.102",
  user: "root",
  password: "tiger",
  // password: "root",
  database: "mydb",
  multipleStatements: true,
});
db.connect((err) => {
  if (err) {
    console.log(`err ${err}`);
  } else console.log("ana mconnece");
});
module.exports = db;
