const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Outvilejelly123',
  database: 'homies'
});

//update assignment to complete
// UPDATE assignments
// SET completed = 1
// WHERE id = ?; 

module.exports = db;

