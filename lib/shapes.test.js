const Shapes = require('./shapes.js');

describe ('Shapes', () => {
    describe ('RenderCircle', ()=> {
        it ('should ensure that the shape object is being constructed properly', () => {
            const ShapeColor = 'blue';
            const TextColor = 'red';
            const Text = 'RWB';
            const Shape = new Shapes.Circle(ShapeColor, TextColor, Text);
            const RenderShapeColor = Shape.shapeFill;
            expect(RenderShapeColor).toEqual('blue');
        }) 
    })
    describe ('Square', ()=> {
        it ('should ensure that the rendercircle function is being executed properly', () => {
            const ShapeColor = 'blue';
            const TextColor = 'red';
            const Text = 'RWB';
            const square1 = new Shapes.Square(ShapeColor, TextColor, Text);
            const RenderShape1 = square1.stringOutput(ShapeColor, TextColor, Text);
            const svg1 = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="200" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">RWB</text></svg>`;
            expect(RenderShape1).toEqual(svg1);
        }) 
    })
    describe ('Circle', ()=> {
        it ('should ensure that the rendercircle function is being executed properly', () => {
            const ShapeColor = 'blue';
            const TextColor = 'red';
            const Text = 'RWB';
            const circle1 = new Shapes.Circle(ShapeColor, TextColor, Text);
            const RenderShape2 = circle1.stringOutput(ShapeColor, TextColor, Text);
            const svg2 = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">RWB</text></svg>`;
            expect(RenderShape2).toEqual(svg2);
        }) 
    })
    describe ('Triangle', ()=> {
        it ('should ensure that the rendercircle function is being executed properly', () => {
            const ShapeColor = 'blue';
            const TextColor = 'red';
            const Text = 'RWB';
            const triangle1 = new Shapes.Triangle(ShapeColor, TextColor, Text);
            const RenderShape3 = triangle1.stringOutput(ShapeColor, TextColor, Text);
            const svg3 = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">RWB</text></svg>`;
            expect(RenderShape3).toEqual(svg3);
        }) 
    })
});