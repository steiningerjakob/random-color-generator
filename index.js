const randomColor = require('randomcolor'); // import the script
const chalk = require('chalk'); // imports chalk script

const color = randomColor(); // a hex code for an attractive color

const output = `
###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################`; // this is the output

if (!process.argv[2]) {
  console.log(chalk.hex(color).bold(output));
} else {
  console.log(chalk.keyword(process.argv[2])(output));
}
// this calls the output in the correct color
