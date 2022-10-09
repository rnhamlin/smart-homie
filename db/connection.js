const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Outvilejelly123',
  database: 'homies'
});

module.exports = db;

