// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.toLowerCase() === "apache") return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  if(license.toLowerCase() === "gnu") return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  if(license.toLowerCase() === "mit") return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.toLowerCase() === "apache") return 'https://opensource.org/licenses/Apache-2.0';
  if(license.toLowerCase() === "gnu") return 'https://www.gnu.org/licenses/gpl-3.0';
  if(license.toLowerCase() === "mit") return "https://opensource.org/licenses/MIT";
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache" || license === "GNU" || license === "MIT") {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  } 
  
  return "";
  

}

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
  
  //add license if available
  let licenseString = "## License\n";

  if (data['License'] != "") {
    toc = toc + "[License](#license)\n\n";
    licenseString = licenseString + `This project is covered by the ${data.License} license\n\n`;

    let licenseMarkup = renderLicenseSection(data['License']);
    licenseString = licenseString + licenseMarkup + "\n";

  }
  
  //add body. ignore empty elements, title because it is already written and profile and email 
  let bodyString = "";
  for (var key in data) {
    if (data[key] != ""  && key != 'Title' && key != "Profile" && key != "Email" && key != "License") {
      bodyString = bodyString + `## ${key}\n${data[key]}\n`;
      toc = toc + `[${key}](#${key.toLowerCase()})\n\n`
    }
  }



  //add Question section if either profile or email are provided. Add them to the file if they are present
  if (data['Profile'] != "" || data['Email'] != "") {
    bodyString = bodyString + `## Questions\n`;
    toc = toc + "[Questions](#questions)\n";
    data.Profile != "" ?  bodyString = bodyString + `[Github Profile](https://github.com/${data['Profile']})\n\n` : "";
    data.Email != "" ? bodyString = bodyString + `Email: ${data['Email']}\n` : "";
  }
  return titleString + toc + licenseString + bodyString;
}

module.exports = generateMarkdown;
