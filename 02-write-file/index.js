const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const myWrite = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const rl = readline.createInterface({ input, output });


rl.question("Hello write some text, please!\n", (answer) => {    
    if (answer === 'exit') process.exit();  
    myWrite.write(answer + '\n');       
});

rl.on("line", (input) => {   
    if (input === 'exit')  process.exit(); 
    myWrite.write(input + '\n');       
});

process.on('exit', () => {
    console.log('Thank you. Process is completed.');
});

process.on('SIGINT', () => {
    console.log('Thank you. Process is completed.');    
});
