const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');

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
        if (data.shape == 'Circle'){
            const newCircle = new Shape.Circle(data.shapecolor, data.textcolor, data.text);
            newCircle.render(data.shapecolor, data.textcolor, data.text);
        } else if (data.shape == 'Triangle'){
            const newTriangle = new Shape.Triangle(data.shapecolor, data.textcolor, data.text);
            newTriangle.render(data.shapecolor, data.textcolor, data.text);
        } else if (data.shape == 'Square'){
            const newSquare = new Shape.Square(data.shapecolor, data.textcolor, data.text);
            newSquare.render(data.shapecolor, data.textcolor, data.text);
        }
        console.log(`Created a ${data.shapecolor} ${data.shape} containing ${data.textcolor} characters ${data.text}`);
    });