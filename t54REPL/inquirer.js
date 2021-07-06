const inquirer = require("inquirer");

let questions = [
    {
        "type": "input", // mitoonim anvae type mesle checkbox va... dashte bashim
        "name": "firstQ",
        "message": "what's your name"
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(answers);
});