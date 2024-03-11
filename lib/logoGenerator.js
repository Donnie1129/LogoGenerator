const { Circle, Square, Triangle } = require('./shapes');

class LogoGenerator {
  constructor() {
    this.shapes = {
      circle: new Circle(),
      square: new Square(),
      triangle: new Triangle(),
    };
  }

  generateLogo(text, textColor, shapeType, shapeColor, width = 100, height = 100) {
    const shape = this.shapes[shapeType.toLowerCase()];
    
    shape.setColor(shapeColor);

    const shapeSVG = shape.render();

    return `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="50%" y="50%" fill="${textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </svg>
    `;
  }
}

module.exports = LogoGenerator;
