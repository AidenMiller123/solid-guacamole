// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
inquirer
// TODO: Create an array of questions for user input
.prompt ([{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project',
      name: 'description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licnese should your project have?',
        choices: [
          { title: 'Apache 2.0', value: 'Apache 2.0' },
          { title: 'GNU GPL v3', value: 'GNU GPL v3'},
          { title: 'The Perl License', value: 'The Perl License'},
          { title: 'ISC License (ISC)', value: 'ISC License (ISC)'},
          { title: 'The MIT License', value: 'The MIT License' },
        ],
        initial: 1
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
      },
    
])
.then((data) => {
    readMePageContent = generateMarkdown(data);
// TODO: Create a function to write README file
    fs.writeFile('README.md', readMePageContent, (err) =>
     err ? console.error(err) : console.log('Your Readme file was succesfully made!'))
    
  })


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
