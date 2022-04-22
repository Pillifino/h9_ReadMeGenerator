// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Utils/generateMarkdown");

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe Your Project.",
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "instructions",
        message: "How do you use this application?",
    },
    {
        type: "input",
        name: "gitHubName",
        message: "What is your Github Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }, 
    {
        type: "checkbox",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause'Simplified' License",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "The Unlicense"
        ]
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("Error: File Not Created");
        } else {
            console.log("File created!");
        }
    });
}

// A function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);
        writeToFile("ReadMeHW.md", readMeContent);
    });
}

// Function call to initialize app
init();