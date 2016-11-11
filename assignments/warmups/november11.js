

function luckySum(num1, num2, num3) {

    if(num1 === 13 ) {
        return 0;
    } else if ( num2 === 13) {
        return num1;
    } else if ( num3 === 13) {
        return num1 + num2;
    } else {
        return num1 + num2 + num3;
    }

}

console.log(luckySum(1, 2, 3));
console.log(luckySum(1, 2, 13));
console.log(luckySum(1, 13, 3));