const inquirer = require("inquirer"); //
const fs = require("fs");

const generateReadMe = (data) => //Literally Put Readme outline in here and add ${data.datatypehere}
  `# <${data.title}>
  
    ## Description
        ${data.description}
    ## Installation Instructions
        ${data.installation}
    ## Usage Information
        ${data.usage}
    ## Credits
        ${data.credits} 
    ## Tests
        ${data.tests}
  `;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title?",
    },
    {
      type: "input",
      name: "description",
      message: "Tell Us About Your Project",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation Instuctions?",
    },
    {
      type: "input",
      name: "usage",
      message: "How Do We Use This Project?",
    },
    {
      type: "input",
      name: "credits",
      message: "Who Helped Out With This Project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What Tests Are You Adding?",
    },
  ])
  .then((answers) => {
    const ReadMEContent = generateReadMe(answers);

    fs.writeFile("README.md", ReadMEContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });
