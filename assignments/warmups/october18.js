var readlineSync = require('readline-sync');

var userInput = readlineSync.question('Please enter a few words that are seperated by spaces, underscores, or dashes: ');


function camelCase(str) {
    var letterArray = str.split('');
    var newarr = [];
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i] === ' ' || letterArray[i] === '_' || letterArray[i] === '-') {
            var cap = letterArray[i + 1].toUpperCase();
            newarr.push(cap);
            letterArray.splice(i, 1);
        } else {
            newarr.push(letterArray[i]);
        }
    }
    return newarr.join("");
}

console.log(camelCase(userInput));
console.log(camelCase(userInput));
console.log(camelCase(userInput));

