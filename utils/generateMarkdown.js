/*
  Function: renderLicenseBadge
  Usage: Used to get the url of the license's image. If unsupported license, an empty string is returned
  input: license - string representing license. It can be either "Apache", "GNU", or "MIT". 
  return: string - url of the license if it is valid or an empty string otherwise
*/
function renderLicenseBadge(license) {
  if(license.toLowerCase() === "apache") return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  if(license.toLowerCase() === "gnu") return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  if(license.toLowerCase() === "mit") return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  return "";
}

/*
  function: renderLicenseLink
  Usage: used to get the url of the license. If unsupported license, an empty string is returned
  input: license - string representing the license. Supported licenses are Apache, GNU, or MIT
  return: string - url of the license or empty string if invalid
*/
function renderLicenseLink(license) {
  if(license.toLowerCase() === "apache") return 'https://opensource.org/licenses/Apache-2.0';
  if(license.toLowerCase() === "gnu") return 'https://www.gnu.org/licenses/gpl-3.0';
  if(license.toLowerCase() === "mit") return "https://opensource.org/licenses/MIT";
  return "";
}

/* 
  function: renderLicenseSection
  purpose: creates the license section's string of the generated README file
  input: license - string representing the license. Supported are apache, gnu or mit
  return: string - the markdown string for the license if supported, or empty string otherwise
*/
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
  let tocString = "## Table of Contents\n";
  
  //add license if available
  let licenseString = "";

  if (data['License'] != "") {
    licenseString = "## License\n";
    tocString = tocString + "[License](#license)\n\n";
    licenseString = licenseString + `This project is covered by the ${data.License} license\n\n`;

    let licenseMarkup = renderLicenseSection(data['License'].toString());
    licenseString = licenseString + licenseMarkup + "\n";

  }
  
  //add body. ignore empty elements, title and license because it is already written, profile and email will be handled separately
  let bodyString = "";
  for (var key in data) {
    if (data[key] != ""  && key != 'Title' && key != "Profile" && key != "Email" && key != "License") {
      bodyString = bodyString + `## ${key}\n${data[key]}\n`;
      tocString = tocString + `[${key}](#${key.toLowerCase()})\n\n`
    }
  }

  //add Question section if either profile or email are provided.
  if (data['Profile'] != "" || data['Email'] != "") {
    bodyString = bodyString + `## Questions\n`;
    tocString = tocString + "[Questions](#questions)\n";
    data.Profile != "" ?  bodyString = bodyString + `[Github ${data['Profile']}](https://github.com/${data['Profile']})\n\n` : "";
    data.Email != "" ? bodyString = bodyString + `Email: ${data['Email']}\n` : "";
  }
  return titleString + tocString + licenseString + bodyString;
}

module.exports = generateMarkdown;
