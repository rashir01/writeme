// Use inquirer package to get user input
const inquirer = require('inquirer');
//Description,  Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = ["Project title:", "Project description:", "Installation instructions:", "Usage:", "Licence:", "Contributing:", "Tests:", "Quesionts:"];
const names = ["title", "description", "installation", "usage", "licence", "contributing", "tests", "questions"];
let values =  [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log("init");
  inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: names[0],
    },
    {
      type: 'input',
      message: questions[1],
      name: names[1],
    },
    {
      type: 'input',
      message: questions[2],
      name: names[2],
    },
    {
      type: 'input',
      message: questions[3],
      name: names[3],
    },
    {
      type: 'input',
      message: questions[4],
      name: names[4],
    },
    {
      type: 'input',
      message: questions[5],
      name: names[5],
    },
    {
      type: 'input',
      message: questions[6],
      name: names[6],
    }
  ])
  .then((response) => {
      values = JSON.stringify(response);

  });
}

init();


/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/