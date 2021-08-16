// Use inquirer package to get user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//Description,  Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const QUESTIONS = ["Project title:", "Project description:", "Installation instructions:", "Usage:", "Licence:", "Contributing:", "Tests:", "Quesionts:"];
const NAMES = ["Title", "Description", "Installation", "Usage", "License", "Contributing", "Tests"];
let values =  [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFileSync(fileName, data, (err) => err ? console.log(err) : console.log('File written!'));



}

// TODO: Create a function to initialize app
function init() {
  //console.log("init");
  inquirer
  .prompt([
    {
      type: 'input',
      message: QUESTIONS[0],
      name: NAMES[0],
    },
    {
      type: 'input',
      message: QUESTIONS[1],
      name: NAMES[1],
    },
    {
      type: 'input',
      message: QUESTIONS[2],
      name: NAMES[2],
    },
    {
      type: 'input',
      message: QUESTIONS[3],
      name: NAMES[3],
    },
    {
      type: 'input',
      message: QUESTIONS[4],
      name: NAMES[4],
    },
    {
      type: 'input',
      message: QUESTIONS[5],
      name: NAMES[5],
    },
    {
      type: 'input',
      message: QUESTIONS[6],
      name: NAMES[6],
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
  ])
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







WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile



*/