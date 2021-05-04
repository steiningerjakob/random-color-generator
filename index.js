const randomColor = require('randomcolor'); // import the script
const color = randomColor(); // a hex code for an attractive color
const chalk = require('chalk');

console.log(chalk.hex(color)`
###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################
`);
