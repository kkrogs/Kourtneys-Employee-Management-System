const inquirer = require('inquirer');

// Import and require mysql2
const mysql = require('mysql2');

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
db.query('SELECT * FROM employee_db', function (err, results) {
    console.log(results);
  });
  

 
  

  // Not sure if we can put express here?????????

// array for team
const teamArray = []; 

// manager questions
const addDept = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'whatToDo',
            message: "What would you like to do?",
            choices: ['Add Department', 'Add Role', 'Quit application'],
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

// .then(employeeParams => {
//     // params collected for employee types 

//     let { whatToDo, deptName } = addParams; 
//     let employee; 
//     //if the engineer role is chosen, then make engineer = new Engineer taking into account name, id, email, github params from question prompts
//     if (whatToDo === 'Add Department') {
//         employee = new addDepartment (parametersHere)

//     } else if (role === 'Intern') {
//         employee = new Intern (name, id, email, school);

//         console.log(employee);
//     }

//     teamArray.push(employee); 
//     //if the user would like to add more employees, ask the employee information questions from confirmAddEmployee and then push it up to the teamArray
//     if (addEmployeeQuestion) {
//         return createEmployee(teamArray); 
//     } else {
//         return teamArray;
//     }
// })



};

addDept();