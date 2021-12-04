// function to generate markdown for README
function generateMarkdown(data) {
  // # displays an h1 header, ## displays h2 header
  return `# ${data.title}, 
      
       ## Descrition 
        ${data.description},

      ## Table of Contents
      Installation: ${data.installation}
      Usage: ${data.usage}
      Contributions: ${data.contributions}
      Licenses: ${data.licesne}
      
      ## Installation
      ${data. installation},

      ## Usage
      ${data.usage},

      ## Licenses
      ${data.license}, 

      ## Contributions
      ${data.contributions}, 

      ## Tests
      ${data.tests},

      ## Questions
      ${data.ques}, 
  
`;
}

module.exports = generateMarkdown;
