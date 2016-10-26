
var myArray = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 1, 6, 7, 8, 5, 8];

Array.prototype.myNumFilter = function (callback, largestNum) {
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= largestNum) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

var myAnswer = myArray.myNumFilter(function (element) {
  return element <= largestNum;
}, 2);

console.log(myAnswer);



var letterArray = ['a','b','c','d','e','f','a','b','s','c','b','d','a'];


Array.prototype.myLetterFilter = function (callback, letter) {
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === letter) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};


var myLetterAnswer = letterArray.myLetterFilter(function (element) {
  return element === letter;
}, "b");

console.log(myLetterAnswer);

