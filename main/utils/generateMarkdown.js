// This function creates a license badge based on what the user picks
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
        license = `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
    case 'GNU GPL v3': 
       license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        break;
    case 'The Perl License': 
       license = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
        break;
    case 'The MIT License': 
       license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
    default:
        license = [];
  }
  return license;
}
// This function generates this readme 
function generateMarkdown(data) {
  
  return  `#  ${data.title}

 ${renderLicenseBadge(data.license)}


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

  \`\`\`
  ${data.install} 
  \`\`\`

  ## Usage

  
  ${data.usage}


  ## Tests

  \`\`\`
  ${data.tests}
  \`\`\`


  ## Contributing
  
  ${data.contributing}
  
  ## Questions
  
  Any Quesions about the application can directed to me at:
  
  GitHub: https://github.com/${data.github}
  
  Email : ${data.email}
  
  
  ## License
  
  This project is licensed under ${data.license}

`;
}
// This exports the generateMarkdown fucntion to the index.js
module.exports = generateMarkdown;