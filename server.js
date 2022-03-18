const inquirer = require('inquirer');

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database ????????????
db.query('SELECT * FROM ?????????students', function (err, results) {
    console.log(results);
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  

  // Not sure if we can put express here?????????

  // packages 
const fs = require('fs'); 
const inquirer = require('inquirer');

// array for team
const teamArray = []; 

// manager questions
const addDept = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'whatToDo',
            message: "What would you like to do?",
            choices: ['Add Department', 'Add role', 'Quit application'],
        },
        {
            type: 'input',
            name: 'deptName',
            message: "What is the name of the department?",
           
        },
// Above needs to be logged to the database
// It should then loop back and ask the user what they would like to do
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
      
        }
    ])


//copied from previous homework

.then(employeeParams => {
    // params collected for employee types 

    let { name, id, email, role, github, school, addEmployeeQuestion } = employeeParams; 
    let employee; 
    //if the engineer role is chosen, then make engineer = new Engineer taking into account name, id, email, github params from question prompts
    if (role === 'Engineer') {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === 'Intern') {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamArray.push(employee); 
    //if the user would like to add more employees, ask the employee information questions from confirmAddEmployee and then push it up to the teamArray
    if (addEmployeeQuestion) {
        return createEmployee(teamArray); 
    } else {
        return teamArray;
    }
})

};