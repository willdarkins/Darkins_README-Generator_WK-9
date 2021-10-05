// Packages needed to run this application
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);

//Empty array meant to store user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Please provide the title of your project (Required)',
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
            name: 'description',
            message: 'Write a description of your project (Required)',
            validate: descripInput => {
                if (descripInput) {
                    return true;
                } else {
                    console.log('A short project description is required. Please provide.')
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide a step-by-step guide in order to install your project (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('An install guide is required. Please provide.')
                }
            }
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What programming languages did you use creating this project? (Select all that apply)',
            choices: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Python', 'Node.JS', 'Java']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('A usage guide is required. Please provide.')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Did you have any collaborators on this project?',
            default: true
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List your collaborators with links to their GitHub profiles:',
            when: ({ confirmCredits }) => confirmCredits
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should be referenced for your project? (Please select one option)',
            choices: ['MIT', 'APACHE 2.0', 'GPL', 'postgresql']
        },
        {
            type: 'confirm',
            name: 'confirmFeature',
            message: 'Does your project have any features you would like to highlight?',
            default: true
        },
        {
            type: 'input',
            name: 'feature',
            message: 'Provide a list of features associated with your project:',
            when: ({ confirmFeature }) => confirmFeature
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github user name (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('A Github user name is required. Please provide.')
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('An email address is required. Please provide.')
                    return false;
                }
            },
        },
    ])
}

// Async function that will ultimatley write new file
async function init() {
    try {
        const data = await questions();
        const fileSpecs = `./dist/${data.projectName.split(' ').join('')}.md`
        const generateContent = generateMarkdown(data);
        await writeFileAsync(fileSpecs, generateContent);
        console.log('README created! Check it out in the dist sub-directory to see!');
    } catch (err) {
        console.log(err)
    };
};

// Initialize file writing
init();