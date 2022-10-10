const inquirer = require('inquirer');
const mysql = require('mysql'); 
const fs = require('fs'); 
const db = require('./db/connection');

// capture user input answering inquirer prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do? (use arrow keys)',
            choices: [
                'View all assignments',
                'View all employees by subject',
                'View all students',
                'View all students by grade',
                'Remove assignment',
                'Update assignment completion status'
            ]
        }.then(function(res){
            if(res.start === 'View all assignments')
            {
                viewAllAs();
            }
            else if (res.start === 'View all assignments by subject')
            {
                viewAllAsSubj();
            }
        })
    ]);
};

function viewAllAs() {
    db.query(`SELECT * FROM assignments`, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
    }
    );
    promptUser();
};
