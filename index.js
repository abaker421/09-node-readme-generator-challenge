// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import {generateMarkdown} from  './utils/generateMarkdown.js'
import fs from 'fs'
const fileName= 'README.md'


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Generated successfully!')
    }
  })
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
      message:'What is the image link for the screenshot?',
      name: 'userScreenshotLink',
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
     type: 'list',
     message: 'What kind of license do you want to use?',
     name: 'userLicense',
     choices:['MIT', 'BSD', 'GPL', 'None'],
    }

])
.then((answers) => {
    const markdown= generateMarkdown(answers, answers.userLicense)
    
    writeToFile(fileName, markdown)
})

.catch((err)=>{
  console.log(err)
})
}

// Function call to initialize app
init();
