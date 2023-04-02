// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#  ${data.title}

  [![License: ${data.license}][shield-license]](#)


  ## Description
  
  ${data.description}
  

  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation

  
  ${data.install}
   
  
  ## Usage
  
  
  ${data.usage}
 
  
  ## Tests
  
  ${data.tests}

  ## Contributing
  
  ${data.contributing}
  
  ## Questions
  
  Any Quesions about the application can directed to me at:
  
  GitHub: github.com/${data.github}
  
  Email : ${data.email}
  
  
  ## License
  
  This project is licensed under ${data.license}

`;
}

module.exports = generateMarkdown;
