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
            `<svg version="1.1" width="300" height="200" xmlns="">

            <circle cx="150" cy="100" r="80" fill="green" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
          
          </svg>`,                
          (err) => err ? console.log(err) : console.log('Success!'));
    }
}

class Triangle extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text)
    }
    render(shapeFill, textFill, text) {
        fs.writeFile('circle.svg',
            `<svg version="1.1" width="300" height="200" xmlns="">

            <polygon points="150, 18 244, 182 56, 182" fill="green" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
          
          </svg>`,                
          (err) => err ? console.log(err) : console.log('Success!'));
    }
}

class Square extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text)
    }
    render(shapeFill, textFill, text) {
        fs.writeFile('circle.svg',
            `<svg version="1.1" width="300" height="200" xmlns="">

            <rect x="0" y="0" width="300" height="200" fill="green" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
          
          </svg>`,                
          (err) => err ? console.log(err) : console.log('Success!'));
    }
}

module.exports = {Shape, Circle, Triangle, Square};