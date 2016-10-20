// var readlineSync = require('readline-sync');

var userInput = prompt("please enter a bunch of letters and I'll tell you which is the first non repeat: ");

function firstNoRepeat(input) {


    for (var i = 0; i < input.length; i++) {

        var first = input[i];
        var second = input[i + 1];

        if (first === second) {
            continue
        } else {
            return (second);
        }
    }

}


var result = firstNoRepeat(userInput);

console.log(result);

