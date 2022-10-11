const mysql = require('mysql2');
const Sequelize = require('sequelize'); 

require('dotenv').config();

const sequelize = new Sequelize(process.env_DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  user: 'root',
  port: 3306
});

// do I comment this createConnection out/delete since we have sequelize now above?
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Outvilejelly123',
  database: 'homies'
});

module.exports = sequelize; 
module.exports = db;

