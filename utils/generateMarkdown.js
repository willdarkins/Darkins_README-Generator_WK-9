// Function to display programming language badges in template literal
const renderLanguageBadge = language => {
  let langBadge = ''
  if (!language) {
    return '';
  }
  // For loop to iterate through badges and select from user input
  for (var i = 0; i < language.length; i++) {
    switch (language[i]) {
      case 'HTML':
        langBadge += `![HTML](https://img.shields.io/badge/Language-HTML-yellowgreen.svg)`
        break;
      case 'CSS':
        langBadge += `![CSS](https://img.shields.io/badge/Language-CSS-important.svg)`
        break;
      case 'Javascript':
        langBadge += `![Javascript](https://img.shields.io/badge/Language-HTML-yellow.svg)`
        break;
      case 'JQuery':
        langBadge += `![JQuery](https://img.shields.io/badge/Language-JQuery-informational.svg)`
        break;
      case 'Python':
        langBadge += `![Python](https://img.shields.io/badge/Language-Python-9cf.svg)`
        break;
      case 'Node.JS':
        langBadge += `![Node.JS](https://img.shields.io/badge/Language-Node.JS-ff69b4.svg)`
        break;
      case 'Java':
        langBadge += `![Java](https://img.shields.io/badge/Language-Java-red.svg)`
        break;

      default:
        ''
        break;
    }
  }
  return langBadge;
}

// Function to display license badges in template literal
const renderLicenseBadge = license => {
  let badge = ''
  if (!license) {
    return '';
  }
// For loop to iterate through badges and select from user input
  for (var i = 0; i < license.length; i++) {
    switch (license[i]) {
      case 'MIT':
        badge += `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        break;
      case 'APACHE 2.0':
        badge += `![APACHE 2.0](https://img.shields.io/badge/License-APACHE2.0-blue.svg)`
        break;
      case 'GPL':
        badge += `![GPL license](https://img.shields.io/badge/License-GPL-brightgreen.svg)`
        break;
      case 'postgresql':
        badge += `![postgresql](https://img.shields.io/badge/License-postgresql-blueviolet.svg)`
        break;

      default:
        ''
        break;
    }
  }
  return badge;
};

// Function to display license links in template literal
const renderLicenseLink = license => {
  let link = ''
  if (!license) {
    return ''
  }
// For loop to iterate through license links and select from user input
  for (var i = 0; i < license.length; i++) {
    switch (license[i]) {
      case 'MIT':
        link += `<a href= https://opensource.org/licenses/MIT)>MIT License Link</a><br>`
        break;
      case 'APACHE 2.0':
        link += `<a href= https://opensource.org/licenses/Apache-2.0>APACHE 2.0 License Link</a><br>`
        break;
      case 'GPL':
        link += `<a href= https://opensource.org/licenses/GPL-2.0>GPL License Link</a><br>`
        break;
      case 'postgresql':
        link += `<a href= https://opensource.org/licenses/PostgreSQL>postgresql License Link</a><br>`
        break;

      default:
        ''
        break;
    }
  }
  return link;
}

// Funciton to display license badges, links and html template literal for that section
const renderLicenseSection = license => {
  return `
  ## License
This project is licensed under: <br>
${renderLicenseBadge(license)}<br>
${renderLicenseLink(license)}`
}

// Function to generate markdown for README

const generateMarkdown = data => {
  return `
# 💻 ${data.projectName}

## Description
*The what, why, and how:*<br>
❓ ${data.description}

## Table of Contents

* [Installation](#installation)
* [Language](#language)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#feature)
* [Contact](#contact)

## Installation
*Steps required to install project and how to get the development environment running:* 
<br>
🔌 ${data.install}

## Language 
*The following programming languages were utilized when completing this project:*
<br>
${renderLanguageBadge(data.language)}

## Usage
*Instructions and examples for use:*
<br>
🏁 ${data.usage}

## Credits
*A thank you to those who helped make this happen:*
<br>
💳 ${data.credit}

${renderLicenseSection(data.license)}

## Features
*These features make up the core tenets of this project:*
<br>
🌟 ${data.feature}

## Contributing
👐 This project adheres to standards set by the <a href = https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md>Contributor Covenant</a>.<br>
Please consult this documentation before contributing to this project.

## Contact
* Email 📪 ${data.email}
* Github 🗿 [${data.github}](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;