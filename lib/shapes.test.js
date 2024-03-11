const { Circle, Square, Triangle } = require('../lib/shapes');

describe('Circle', () => {
  test('render method should return correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />');
  });
});

describe('Square', () => {
  test('render method should return correct SVG string', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="red" />');
  });
});

describe('Triangle', () => {
  test('render method should return correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toEqual('<polygon points="50,10 90,90 10,90" fill="green" />');
  });
});