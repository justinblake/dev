//problem 1

// function initial(num1, num2) {
//     var final = num1 + num2;
//     return final;
// }
//
// var total = initial(2,4);
//
// console.log(total);

//problem 2


// function second(num1, num2, num3) {
//
//     var largest = Math.max(num1,num2,num3);
//
//     return largest;
//
// }
//
// var huge = second(2,9,8);
//
// console.log(huge);

//problem 3

// function isEven(num) {
//
//     if (num % 2 === 0) {
//         return("This an even number!")
//     } else {
//         return('This is an odd number!')
//     }
//
// }
//
// console.log(isEven(5));

//problem 4

// function sliceString(input) {
//
//     var inputLength = input.length;
//
//     if (inputLength < 20) {
//
//         var newWord = input + input;
//         return newWord;
//     } else {
//         var cutIt = inputLength / 2;
//
//         var newString = input.slice(0, cutIt);
//         return newString;
//     }
//
// }
//
// console.log(sliceString("This is a test to see where it is cutting"));


//Extra Problems

function getMax(input) {
    var newObj = {};
    // var splInput = input.split('');

    for (var i = '0'; i < input.length; i++) {
        var newKey = input[i];
        if (newKey in newObj) {
            newObj.newKey +=1
        } else {
            newObj.newKey = 1;
        }
    }

    return newObj;
}


console.log(getMax("kjhasdflkeirh"));





















