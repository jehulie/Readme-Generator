// Declaring const for each license to access links for rendering badges
const noBadge = "";
const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const gnu = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const cc = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
const mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

// This function returns a license badge based on which license input data is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return apache;
  }
  else if (license === 'GNU General Public License v3.0') {
    return gnu;
  }
  else if (license === 'MIT License') {
    return mit;
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return cc;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return mozilla;
  }
  else {
    return noBadge;
  }
};

// This function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `## License
    This application is covered under the ${license}.`;
  }
  else {
    return '';
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
   
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

  ${renderLicenseSection(data.license)} 
 
`;
};

module.exports = generateMarkdown;
