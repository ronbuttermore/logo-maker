const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            name:'text',
            message:'Please enter up to three characters to use in your logo: ',
        },
        {
            type:'input',
            name:'textcolor',
            message:'Please enter a color or hexadecimal number to use as the logo\'s text color: ',
        },
        {
            type:'list',
            name:'shape',
            message:'Please select a shape for your logo from the list below: ',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type:'input',
            name:'shapecolor',
            message:'Please enter a color or hexadecimal number to use as the logo\'s shape color: ',
        }
    ])
    .then((data) => {
        console.log(`You selected a ${data.shapecolor} ${data.shape} containing ${data.textcolor} characters ${data.text}`);
    });