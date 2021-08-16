// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

/*
  Function: generateMarkdown
  Purpose: generate the string that is the markdown to be written to a file
  Input: data - an object containing all the keys and values for the data going into the readme. Empty values will not be written to the file
  Return: string - a string that should be written to a file
*/
function generateMarkdown(data) {
  //add page title
  let titleString =  `# ${data.Title}\n`;
  //add TOC
  let toc = "## Table of Contents\n";
  //add body. ignore empty elements, title because it is already written and profile and email 
  let bodyString = "";
  for (var key in data) {
    if (key != 'Title' && data[key] != "" && key != "Profile" && key != "Email") {
      bodyString = bodyString + `## ${key}\n${data[key]}\n`;
      toc = toc + `[${key}](#${key.toLowerCase()})\n\n`
    }
  }

  //add Question section if either profile or email are provided. Add them to the file if they are present
  if (data['Profile'] != "" || data['Email'] != "") {
    bodyString = bodyString + `## Questions\n`;
    toc = toc + "[Questions](#questions)\n";
    data.Profile != "" ?  bodyString = bodyString + `[Github Profile](https://github.com/${data['Profile']})\n\n` : "";
    data.Email != "" ? bodyString = bodyString + `Email ${data['Email']}\n` : "";
  }
  return titleString + toc + bodyString;
}

module.exports = generateMarkdown;
