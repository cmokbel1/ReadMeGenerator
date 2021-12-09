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
      choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense','zLib License']
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
