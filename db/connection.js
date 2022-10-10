const mysql = require('mysql2');
const Sequelize = require('sequelize'); 

require('dotenv').config();

const sequelize = new Sequelize('smart-homie_db', 'username', 'password', {
  host: 'localhost',
  user: 'root',
  port: 3306
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Outvilejelly123',
  database: 'homies'
});

module.exports = sequelize; 
module.exports = db;

