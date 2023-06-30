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
});