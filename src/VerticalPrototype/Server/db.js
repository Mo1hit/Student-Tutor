const mysql = require("mysql");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mentorme',
    insecureAuth: true
});

db.connect((err) => {
    if (err) { throw err; }
    console.log('Mysql Connected . . . .');
})

module.exports = db;