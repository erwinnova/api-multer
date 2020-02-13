const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'erwin',
    password: '1234',
    database: 'contoh',
    port: '3306',
    multipleStatements: true
});

module.exports = db;