// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import generateMarkdown from './utils/generateMarkdown'
const fs = require('fs')


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileName= `README.md`
  fs.writeFile('README.md', data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'number',
      message: 'What year is it?',
      name: 'userYear',
    },
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
      type: 'input',
      message: 'Give a brief Project Description',
      name: 'userProjectDescription',
    },
    {
      type:'input' ,
      message:'What are the Usage instructions?',
      name: 'userUsage',
    },
    {
      type:'input' ,
      message:'What is the repository URL?',
      name: 'userRepository',
    },
    {
      type:'input' ,
      message:'What are the features of the project?',
      name: 'userFeatures',
    },
    {
      type:'input' ,
      message:'What are the links to any relevant documentation? Screenshot will be asked for separatley',
      name: 'userDocumentation',
    },
    {
      type:'input' ,
      message:'What is the ![image] for the screenshot?',
      name: 'userDocumentation',
      default: '![placeholder](https://github.com/bakeradm6/09-node-readme-generator-challenge/assets/123577761/7340e073-8263-45b3-99da-613d6f95d561)',
    },
    {
      type: 'input',
      message: 'What are the tests for this project?',
      name: 'userTests',
    },
    {
      type: 'input',
      message: 'What are the questions for this project?',
      name: 'userQuestions', 
    },
    {
     type: 'choices',
     message: 'What kind of license do you want to use?',
     name: 'license',
     choices:['MIT', 'BSD', 'GPL', 'None'],
     default: 'MIT',
    }

])
.then((answers) => {
    const fileName = 'README.md'
    const markdown= generateMarkdown(answers)
    writeToFile(fileName, markdown)
})
}

// Function call to initialize app
init();
