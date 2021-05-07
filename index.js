// importing npm modules
const randomColor = require('randomcolor');
const chalk = require('chalk');

// defining variables based on user input - next step would be to program a prompt
const userInputHue = process.argv[2];
const userInputLuminosity = process.argv[3];
const color = randomColor({
  luminosity: userInputLuminosity,
  hue: userInputHue,
});

// defining visual output
const output = `###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################`;

// calling the output
console.log(chalk.hex(color).bold(output));
