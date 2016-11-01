var readline = require('readline-sync');

var add = require('./add');
var subtract = require('./subtract');
var multiply = require('./multiply');
var divide = require('./divide');
var exponents = require('./exponents');


var number1 = parseInt(readline.question("Please enter the first number: "));
var number2 = parseInt(readline.question("Plese enter the second number: "));
var userChoice = readline.question("Please choose your operation: add, subtract, multiply, divide, exponents: ");


function nodeCalculator(num1, num2, choice) {

    if (choice === 'add') {
        return add.addNumbers(num1, num2);
    } else if (choice === 'subtract') {
        return subtract.subtractNumbers(num1, num2);
    } else if (choice === 'multiply') {
        return multiply.multiplyNumbers(num1, num2);
    } else if (choice === 'divide') {
        return divide.divideNumbers(num1, num2);
    } else if (choice === 'exponents') {
        return exponents.exponentNumbers(num1, num2);
    }
}

console.log(nodeCalculator(number1, number2, userChoice));


