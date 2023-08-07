// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  
  if (license === 'MIT'){

  } 
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}
  # 

## Project description

${data.userProjectDescription}

## Table of Contents

[Go to Installation section](#installation)

## Installation

${data.userInstallation}

## Usage

${data.userUsage}

${data.userRepository}

## Features

${data.userFeatures}

## Documentation

${data.userDocumentation}

Screenshot:

${data.userScreenshotLink}

## Contributing

${data.userContributing}

## Tests

${data.userTests}

## Questions

${data.userQuestions}

## License

${data.renderLicenseSection(license)}



`;
}


