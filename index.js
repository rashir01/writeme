// Use inquirer package to get user input, fs for file operations, and generateMarkdown for markdown genration
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
const QUESTIONS = [
  {
    type: 'input',
    message: "Enter project title",
    name: "Title",
  },
  {
    type: 'input',
    message: "Enter Project description",
    name: "Description",
  },
  {
    type: 'input',
    message: "Installation instructions:",
    name: "Installation",
  },
  {
    type: 'input',
    message: "Project Usage",
    name: "Usage",
  },
  {
    type: 'checkbox',
    message: "Select License",
    name: "License",
    choices: ['Apache', 'MIT', 'GNU'],
  },
  {
    type: 'input',
    message: "How to contribute",
    name: "Contributing",
  },
  {
    type: 'input',
    message: "How to test",
    name: "Test",
  }, 
  {
    type: 'input', 
    message: "Email address",
    name: "Email"
  }, 
  {
    type: 'input', 
    message: 'Github profile',
    name: 'Profile'
  }
]

/*
  function writeToFile
  purpose: write a given string to a file. File created if it doesnt exist and rewritten if it exists
  input:  fileName - string specifying the file name
          data - string data to be written to the file
  return: none
*/
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => err ? console.log(err) : console.log('File written!'));
}

/*
  function init
  purpose: initialize the app and prompt the user for input. inputs used to generate the resulting README file
  input: none
  return: none
*/
function init() {
  inquirer
  .prompt(QUESTIONS)
  .then((response) => {
    let stringToWrite = generateMarkdown(response);
    writeToFile("README.md", stringToWrite);
  });
}

init();
