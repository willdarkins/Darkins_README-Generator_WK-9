// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const promptUser = readMeData => {
    // if (!readMeData.answers) {
    //     readMeData.answers = [];
    // }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the title of your README file.',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('A README title is required. Please provide.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github user name...',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('A Github user name is required. Please provide.')
                    return false;
                }
            }
        },
    ])
}
promptUser().then(projectData => console.log(projectData));



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
