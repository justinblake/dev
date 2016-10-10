// Write a function called antiCaps which accepts a string and returns a string.
// The purpose of the function is to invert the capitalization of each letter in a string.


function toCaps(input) {

    var newString = '';

    for (var i = 0; i < input.length; i++) {


        if (input[i] === input[i].toUpperCase()) {
            newString += input[i].toLowerCase();
        } else {
            newString += input[i].toUpperCase();
        }
    }

    return newString;

}

console.log(toCaps("AAAAAAAAAnnnnnnDDDDDDDD"));