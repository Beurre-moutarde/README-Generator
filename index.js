const inquirer = require('inquirer');
const fs = require('fs');

//Write prompt with Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a brief description of your project:'
    },
    {
        type: "input",
        name: 'Table of Contents',
        message: 'Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide detailed instructions on how to install the software/app and any necessary information',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide clear and concise instructions on how to use the software, including any relevant features and functionality.',
    },
    {
        type: 'List',
        name: 'License',
        message: 'MIT License, GNU General Public License, Apache License 2.0, BSD 3-Clause License',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please provide information on how others can contribute to your project.'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide information on how to run tests for your project.'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide information on how users can reach you with additional questions about your project.'
    },

]).then(answers => {
    const readme = `# ${answers.projectName} \n ${answers.Description} \n ## Author \n ${answers.author} \n ## Contact \n Email: ${answers.email}`;
    fs.writeFileSync("README.md", readme);
});

