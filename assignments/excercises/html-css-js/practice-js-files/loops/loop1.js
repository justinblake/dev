// Problem 1 Loops

var readline = require('readline-sync');

var userInput = readline.question('Please type a phrase ');

console.log(userInput);

for (var i = 0; i < userInput.length; i++) {
    console.log(userInput[i]);
}
