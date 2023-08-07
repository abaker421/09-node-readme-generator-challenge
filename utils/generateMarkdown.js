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

${userProjectDescription}

## Table of Contents

[Go to Installation section](#installation)

## Installation

${userInstallation}

## Usage

${userUsage}

${userRepository}

## Features

${userFeatures}

## Documentation

${userDocumentation}

Screenshot:

${userScreenshotLink}

## Contributing

${userContributing}

## Tests

${userTests}

## Questions

${userQuestions}

## License

${renderLicenseSection(license)}



`;
}


