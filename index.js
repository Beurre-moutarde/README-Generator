const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: [
        "MIT",
        "Apache 2.0",
        "GPL 3.0",
        "None"
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ];

  inquirer
  .prompt(questions)
  .then((answers) => {
    const licenseBadge =
      answers.license === "MIT"
        ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        : answers.license === "Apache 2.0"
        ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        : answers.license === "GPL 3.0"
        ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        : "";

        const readme = `
        # ${answers.title}
        ${licenseBadge}
        
        ## Description
        ${answers.description}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)
        
        ## Installation
        ${answers.installation}
        
        ## Usage
        ${answers.usage}
        
        ## License
        This project is licensed under the ${answers.license} license.
        
        ## Contributing
        ${answers.contributing}
        
        ## Tests
        ${answers.tests}
        
        ## Questions
        If you have any questions, feel free to reach out to me on GitHub at [${answers.username}](https://github.com/${answers.username}) or by email at ${answers.email}. `; 
       
        writeToFile("README.md", readme)
  });

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log(`The file "${fileName}" has been saved!`);
    });
  }

