// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }
  let badge = ''
  if(badge === 'MIT') {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (badge === 'APACHE 2.0') {
    badge = `![APACHE 2.0](https://img.shields.io/badge/License-APACHE2.0-blue.svg)`
  } else if (badge === 'GPL') {
    badge = `![GPL license](https://img.shields.io/badge/License-GPL-brightgreen.svg)`
  } else if (badge === 'postgresql') {
    badge = `![postgresql](https://img.shields.io/badge/License-postgresql-blueviolet.svg)`
  }
   else {
    license.badge = "N/A"
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README

generateMarkdown = (data) => {
  return `
# ${data.projectName}

${badge}

* [Installation](#installation)
* [Language](#language)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credit}

## License
This project is licensed under:
${data.license}

# Contact
* Email: ${data.email}
* Github: [${data.github}](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
