const renderLanguageBadge = language => {
  if (!language) {
    return '';
  }
  let langBadge = ''
  if (language == 'HTML') {
    langBadge = `![HTML](https://img.shields.io/badge/Language-HTML-yellowgreen.svg)`
  } else if (language == 'CSS') {
    langBadge = `![CSS](https://img.shields.io/badge/Language-CSS-important.svg)`
  } else if (language == 'Javascript') {
    langBadge = `![Javascript](https://img.shields.io/badge/Language-HTML-yellow.svg)`
  } else if (language == 'JQuery') {
    langBadge = `![JQuery](https://img.shields.io/badge/Language-JQuery-informational.svg)`
  } else if (language == 'Python') {
    langBadge = `![Python](https://img.shields.io/badge/Language-Python-9cf.svg)`
  } else if (language == 'Node.JS') {
    langBadge = `![Node.JS](https://img.shields.io/badge/Language-Node.JS-ff69b4.svg)`
  } else if (language == 'Java') {
    langBadge =`![Java](https://img.shields.io/badge/Language-Java-red.svg)`
  }
  return langBadge;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  } 
  let badge = ''
  if(license == 'MIT') {
    badge = `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == 'APACHE 2.0') {
    badge = `![APACHE 2.0](https://img.shields.io/badge/License-APACHE2.0-blue.svg)`
  } else if (license == 'GPL') {
    badge = `![GPL license](https://img.shields.io/badge/License-GPL-brightgreen.svg)`
  } else if (license == 'postgresql') {
    badge = `![postgresql](https://img.shields.io/badge/License-postgresql-blueviolet.svg)`
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (!license) {
    return ''
  }
  let link = ''
  if(license == 'MIT') {
    link = `[${license}](https://opensource.org/licenses/MIT)`
  } else if (license == 'APACHE 2.0') {
    link = `[${license}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'GPL') {
    link = `[${license}](https://opensource.org/licenses/GPL-2.0)`
  } else if (license == 'postgresql') {
    link = `[${license}](https://opensource.org/licenses/PostgreSQL)`
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README

generateMarkdown = data => {
  return `
# ${data.projectName}

## Description
*The what, why, and how:*<br>
<br>
${data.description}

## Table of Contents

* [Installation](#installation)
* [Language](#language)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
*Steps required to install project and how to get the development environment running:* 
<br>
${data.install}

## Language 
*The following programming languages were utilized when completing this project:*
<br>
${renderLanguageBadge(data.language)}

## Usage
*Instructions and examples for use:*
<br>
${data.usage}

## Credits
${data.credit}

## License
This project is licensed under: <br>
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Contact
* Email: ${data.email}
* Github: [${data.github}](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
