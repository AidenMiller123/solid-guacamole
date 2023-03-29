const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = ({name, location, bio, linkedin, github}) =>
`# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file i`;


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Type a personal bio about yourself',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is LinkedIn URL?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'What is GitHub URL?',
        name: 'github',
      },
    ])
    .then((answers) => {
    const readMePageContent = generateReadMe(answers)

     fs.writeFile('README.md', readMePageContent, (err) =>
     err ? console.error(err) : console.log('Success!'))
    });
    