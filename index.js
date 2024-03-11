const inquirer = require('inquirer');
const fs = require('fs');
const LogoGenerator = require('./lib/logoGenerator');

async function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape (circle/square/triangle):',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape color:',
    },
  ]);
}

async function run() {
  try {
    const userInput = await getUserInput();
    const logoGenerator = new LogoGenerator();
    const logoSVG = logoGenerator.generateLogo(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);

    fs.writeFileSync('logo.svg', logoSVG);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

run();
