//Problem 2

var readline = require('readline-sync');

var userInput = readline.question('Please type a phrase ');

var char = readline.question('Please type a char ');

var foundChar = false;

var indexOfChar;

for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] === char) {
        foundChar = true;
        indexOfChar = i;
        break;
    }
}

if (foundChar) {
    console.log(indexOfChar);
} else (
    console.log('Character not found')
);
