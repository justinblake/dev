/**
 * Created by justin on 10/3/16.
 */


var emptyArr = [];

var num = 1;

while(num <= 101) {
    emptyArr.push(num);

    num++;

}

var evenArr = [];

var oddArr = [];

for (var i = 0; i < emptyArr.length; i++) {
    if((emptyArr[i] % 2) === 0) {
        evenArr.push(emptyArr[i]);
    } else {
        oddArr.push(emptyArr[i]);
    }
}

console.log(evenArr);
console.log(oddArr);
