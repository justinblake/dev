// function findNumber(inputArray) {
//
//     for( var i = 0; i < inputArray.length - 2; i++) {
//         if(inputArray[i] === 1 && inputArray[i + 1] === 2 && inputArray[i + 2] === 3)  {
//             return true
//         }
//
//     }
//
//     return false;
//
//
// }
//
// console.log(findNumber([1, 1, 2, 3, 1]));
// console.log(findNumber([1, 1, 2, 4, 1]));
// console.log(findNumber([1, 1, 2, 1, 2, 3]));

// Given an array of ints, return True if 6 appears as either the first or last element in the array. The array will be length 1 or more.
//

function firstLast(inputArray) {

    return (inputArray[0] === 6 || inputArray[inputArray.length - 1] === 6)


}


console.log(firstLast([1, 2, 6]));
console.log(firstLast([6, 1, 2, 3]));
console.log(firstLast([13, 6, 1, 2, 3]));
