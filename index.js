// Global
const fs = require('fs');
const inquirer = require('inquirer');

// Internal NPMs
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user
const questions = [
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
        // We need to validate that user entered a word
        // https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
           return true;
        }
    },
    // GitHub Repository
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of your repository on GitHub.',
        // We need to validate that user entered a word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the name of your GitHub repository.");
            }
           return true;
        } 
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
