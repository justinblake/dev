// Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
//


function sum67(inputArray) {

    var holdingSum = 0;
    var holdingArray = [];

    var findSix = inputArray.indexOf(6);
    var findSeven = inputArray.indexOf(7);

    holdingArray.push(inputArray.slice(0,findSix));
    holdingArray.push(inputArray.slice((findSeven+1), (inputArray.length + 1)));

    if(inputArray.indexOf(6) === -1) {
        holdingArray = inputArray;
    }

    for( var i = 0; i < holdingArray.length; i++) {
        holdingSum += holdingArray[i];

    }

    return holdingSum;

}

console.log(sum67([1, 2, 2]));
console.log(sum67([1, 2, 2, 6, 99, 99, 7]));
console.log(sum67([1, 1, 6, 7, 2]));