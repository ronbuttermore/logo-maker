const fs = require('fs');

class Shape {
    constructor(shapeFill, textFill, text) {
        this.shapeFill = shapeFill;
        this.textFill = textFill;
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text)
    }
    render(shapeFill, textFill, text) {
        fs.writeFile('circle.svg',
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${shapeFill}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text>
          
          </svg>`,                
          (err) => err ? console.log(err) : console.log('Success!'));
    }
}

class Triangle extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text)
    }
    render(shapeFill, textFill, text) {
        fs.writeFile('triangle.svg',
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="${shapeFill}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text>
          
          </svg>`,                
          (err) => err ? console.log(err) : console.log('Success!'));
    }
}

class Square extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text)
    }
    render(shapeFill, textFill, text) {
        fs.writeFile('square.svg',
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="0" y="0" width="300" height="200" fill="${shapeFill}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text>
          
          </svg>`,                
          (err) => err ? console.log(err) : console.log('Success!'));
    }
}

module.exports = {Shape, Circle, Triangle, Square};