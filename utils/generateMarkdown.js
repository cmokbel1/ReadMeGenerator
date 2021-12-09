

// function to generate markdown for README
function generateMarkdown(data) {
  // declare badge logic
  let licenseBadge = [];

  // check
  if (data.license === 'NPM') {
    licenseBadge.push(`![NPM](https://img.shields.io/npm/l/full)`)
  }

  if (data.license === 'APM') {
    licenseBadge.push(`![APM](https://img.shields.io/apm/l/vim-mode)`)
  }

  if (data.license === 'Bower') {
    licenseBadge.push(`![Bower](https://img.shields.io/bower/l/bootstrap)`)
  }
  if (data.license === 'Hex.pm') {
    licenseBadge.push(`![Hex.pm](https://img.shields.io/hexpm/l/plug)`)
  }

  if (data.license === 'Do What the F&%k You Want') {
    licenseBadge.push(`../package.json/"Badge"`)
  }
  // # displays an h1 header, ## displays h2 header
  return `
  # ${data.title}
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/${data.gitHub}/${data.repo})
  ![GitHub](https://img.shields.io/github/license/${data.gitHub}/${data.repo})
  ${licenseBadge}


  ## Description 
  ${data.description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contribution Guidelines](#Contributions)
  4. [Licenses](#Licenses)
      
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licenses
  ${data.license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
   For questions regarding the project, please use the following information:
  1. Username: ${data.gitHub}
  2. Repository: https://github.com/${data.gitHub}
  3. E-mail: ${data.email}
`;
}

module.exports = generateMarkdown;

