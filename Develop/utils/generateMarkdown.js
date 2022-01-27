// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (data.license === 'Apache License 2.0') {
  //  const badge = this.badge,
  //  this.badge === '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  // };
  // else if (data.license === 'GNU General Public License v3.0') {
  //  const badge = this.badge,
  //  this.badge === '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  // };
  // else if (data.license === 'MIT License') {
  //  const badge = this.badge,
  //  this.badge === '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  // };
  // else if (data.license === 'Creative Commons Zero v1.0 Universal') {
  //  const badge = this.badge,
  //  this.badge === '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  // };
  // else if (data.license === 'Mozilla Public License 2.0' {
  //  const badge = this.badge,
  //  this.badge === '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  // };
  // else {
  //  const badge = this.badge,
  //  this.badge === " "
  // };
  // return this.badge
};

// Badge links:
// Apache: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// GNU: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// MIT: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Creative Commons: [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
// Mozilla: [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

//  ** Do I need this function? The above seems to include license link **
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license !== '') {
    return `## License
    This application is covered under the ${data.license}.`
  }
  else {
    return ''
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${this.badge}
   
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
 
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}  

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions about this project, please contact me at ${data.email}.
  
  You can view more of my projects at https://github.com/${data.github}.
 ---

 ## License
 This application is covered under the ${data.license}. 
 
`;
  // return renderLicenseSection; replace ##License above
}

module.exports = generateMarkdown;
