// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',  
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A Github username is required. Please enter here.");
          }
          return true;
        }  
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',  
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("An email address is required. Please enter here.");
          }
          return true;
        }  
      },
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A project title is required. Please enter here.");
          }
          return true;
        }   
      },
      {
        type: 'input',
        message: 'Provide a short description of your project.',
        name: 'description',
        default: 'Project Title',
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A project description is required. Please enter here.");
          }
          return true;
        
      }},
      {
        type: 'input',
        name: 'installation',
        message: 'If required, please describe the steps for installing your project.',
      },
      {
        // need to change for Usage
        type: 'input',
        message: 'Describe how your project is used - functionality and examples.',
        name: 'usage',
       
      },
      {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'The Unilicense'],
        name: 'license',  
      },
      {
        type: 'input',
        message: 'If applicable, describe how other developers can contribute to your project',
        name: 'contributing',  
      },
      {
        type: 'input',
        message: 'If applicable, list tests written for your application and how to run them',
        name: 'tests',
        
      },
    ]);
  };

// TODO: Create a function to write README file
// function writeToFile('Readme.md', data) {
//   fs.writeFile('Readme.md', data, err =>{
//     if(err){
//       console.log(err);
//       return;
//     }
//     else {
//       console.log ("Your README file has been successfully created!")
//     }
//   })
// };

// TODO: Create a function to initialize app
function init (){
    promptUser()
    .then ((data) => fs.writeToFile('Readme.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// function init (){
//   promptUser()
//   .then (answers => {
//     return generateMarkdown(answers);
//   })
//   .then(data => {
//     return fs.writeToFile(data);
//   })
//   .catch((err) => console.error(err));
// };

// Function call to initialize app
init();
