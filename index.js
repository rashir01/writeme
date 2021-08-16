// Use inquirer package to get user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//Description,  Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFileSync(fileName, data, (err) => err ? console.log(err) : console.log('File written!'));



}

// TODO: Create a function to initialize app
function init() {
  //console.log("init");
  inquirer
  .prompt(QUESTIONS)
  .then((response) => {

    Object.keys(response).forEach(key => {
      console.log(key, response[key]);
    });

    let stringToWrite = generateMarkdown(response);
    //console.log(response);
    writeToFile("README.md", stringToWrite);
  });
}

init();


/*









WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile



*/