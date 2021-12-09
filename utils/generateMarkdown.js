// function to generate markdown for README
function generateMarkdown(data) {
  // # displays an h1 header, ## displays h2 header
  return `
  # ${data.title}
      
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
