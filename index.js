const inquirer = require('inquirer');
const mysql = require('mysql'); 
const fs = require('fs'); 
const db = require('./db/connection');

// I'm confused about what index.js in root does vs. what connection.js in /db does...