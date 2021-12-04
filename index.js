// call axios
var axios = require('axios');
// call  markdown function
var mD = require('./utils/generateMarkdown.js');

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
      name: 'tableOfContents',
      message: 'Table of Contents: ',
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
      choices:  ['licence 1','license2','license3']
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
      name: 'ques',
      message: 'Questions:  ',
    }
  ];

// INQUIRE INPUT
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
inquirer
  .prompt(
    // array of questions for user
    questions
  )
  .then((answers) => {
    // move answers to markdown function
    // markdown function needs to call the write to File function
  })
  .catch((error) => {
    if (error.isTtyError) {
        prompt(error.isTtyError)
    } else {
      prompt(error)
    }
  });


// function to write README file
function writeToFile(filename, data) {
  // these needs to call generate mark down
  // then needs to push answers to proper section
  //table of contents needs to create a list
  // link the 'toc' to appropriate object on page
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
