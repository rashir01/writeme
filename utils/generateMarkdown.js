// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //add page title
  let titleString =  `# ${data.Title}\n`;
  //add TOC
  let toc = "## Table of Contents\n";
  //add body
  let bodyString = "";
  for (var key in data) {
    if (key != 'Title' && data[key] != "" && key != "Profile" && key != "Email") {
      bodyString = bodyString + `## ${key}\n${data[key]}\n`;
      toc = toc + `[${key}](#${key.toLowerCase()})\n\n`
    }
  }

  if (data['Profile'] != "" || data['Email'] != "") {
    bodyString = bodyString + `## Questions\n`;
    toc = toc + "[Questions](#questions)\n";
    data.Profile != "" ?  bodyString = bodyString + `Profile ${data['Profile']}\n\n` : "";
    data.Email != "" ? bodyString = bodyString + `Email ${data['Email']}\n` : "";

  }


  return titleString + toc + bodyString;
  // for (let i = 1; i < NAMES.length; i++) {
  //   if (data[NAMES[i]] != "") {
  //     console.log(NAMES[i]+ ":" +data[NAMES[i]]);
  //     fs.appendFileSync('README.md', `## ${NAMES[i]}\n\n`, (err) => err ? console.log(err) : console.log('worte' + NAMES[i]));
  //     fs.appendFileSync(fileName, `${data[NAMES[i]]}\n`, (err) => err ? console.log(err) : console.log('worte' + NAMES[i]))
  //   }
  // }

//   `# ${data.title}

// `;
}

module.exports = generateMarkdown;
