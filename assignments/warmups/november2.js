

// function oddOdds(input) {
//
//     var oddCount = 0;
//
//     for( var i = 0; i < input.length; i++) {
//
//         if(input[i] % 2 !== 0) {
//             oddCount += 1;
//         }
//
//     }
//
//     return (oddCount % 2 !== 0);
// }
//
// console.log(oddOdds([1, 1, 3, 4]));
// console.log(oddOdds([1, 1, 3, 4, 6, 9]));
// console.log(oddOdds([3, 4, 4, 8, 1, 1, 3, 4, 5, 27]));

function sumDouble(num1, num2) {

    if(num1 !== num2) {
        return num1 + num2;
    } else {
        return num1 + num1 + num2 + num2;
    }
}

console.log(sumDouble(1, 2));
console.log(sumDouble(3, 2));
console.log(sumDouble(2, 2));