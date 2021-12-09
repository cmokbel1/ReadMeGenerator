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
      name: 'gitHub',
      message: 'Enter Github Username:  ',
    },
    {
      type: 'input',
      name:'email',
      message: 'Enter your e-mail: ',
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
