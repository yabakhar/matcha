const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "mydb",
});
db.connect((err) => {
  if (err) {
    console.log(`err ${err}`);
  } else console.log("ana mconnece");
});
module.exports = db;
