// call axios
var axios = require('axios');
// call  markdown function
var mD = require('./utils/generateMarkdown');
var fs = require('fs');


// array of questions for user
const questions =
  [
    {
      type: 'input',
      name: 'title',
      message: 'Project Title: '
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project Description: '
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation Guidelines: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to Use: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Licenses:  ',
      choices: ['NPM','APM','Bower','Hex.pm']
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Contribution Guidelines: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests Performed: ',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Enter Github Username:  ',
    },
    {
      type: 'input',
      name:'email',
      message: 'Enter your e-mail: ',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Repository: '
    }
  ];

// INQUIRE INPUT
var inquirer = require('inquirer');


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("File written successfully!")
  });
}

// function to initialize program
async function init() {
  try {
    const userAnswers = await inquirer.prompt(questions)
  const markDown = mD(userAnswers)
  await writeToFile('GENREADME.md', markDown)
} catch (error) {
  console.log(error)
    }
};
  // function call to initialize program
init();
