// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Please provide the title of your project.',
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
            message: 'Write a description of your project',
            validate: descripInput => {
                if (descripInput) {
                    return true ;
                } else {
                    console.log('A short project description is required. Please provide.')
                }
            }
    },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide a step-by-step guide in order to install your project',
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
            message: 'Provide instructions and examples for use.',
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
            message: 'List your collaborators with links to their GitHub profiles.',
            when: ({ confirmCredits }) => confirmCredits
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
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('An email address is required. Please provide.')
                    return false;
                }
            },
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should be referenced for your project? (Please select one option)',
            choices: ['MIT', 'APACHE 2.0', 'GPL', 'postgresql']
        },
    ])
}

  questions()
  .then(data => {
      const fileName = `./dist/${data.projectName.split(' ').join('')}.md`;
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw new Error(err);
        console.log('README created! Check it out in this directory to see!');
      });    
  })

  
