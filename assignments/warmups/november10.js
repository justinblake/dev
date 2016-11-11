//
// var array1 = [1, 2, 3, 7, 9, "Belly", 20];
// var array2 = [2, 3, 4, 8, 10, 'jelly'];
//
// function findUniques(arr1, arr2) {
//
//     var input = arr1.concat(arr2);
//
//     var holdingArray = [];
//     var repeatArray = [];
//
//     for (var i = 0; i < input.length; i++) {
//         if (holdingArray.indexOf(input[i]) === -1) {
//             holdingArray.push(input[i])
//         } else {
//             repeatArray.push(input[i]);
//             holdingArray.splice(holdingArray.indexof([i], 1));
//         }
//     }
//
//     return (holdingArray);
//
// }
//
// var test = findUniques(array1, array2);
//
// console.log(test);


// var array1 = [1, 2, 3, 7, 9, "Belly", 20];
// var array2 = [2, 3, 4, 8, 10, 'jelly'];
//
// function findUniques(arr1, arr2) {
//
//     var input = arr1.concat(arr2);
//
//     var arrayObject = {
//         singles: [],
//         repeats: []
//     };
//
//     for (var i = 0; i < input.length; i++) {
//         if (arrayObject.singles.indexOf(input[i]) === -1) {
//             arrayObject.singles.push(input[i])
//         } else {
//             arrayObject.repeats.push(input[i]);
//             arrayObject.singles.splice(arrayObject.singles.indexOf([i]), 1);
//         }
//     }
//     return (arrayObject);
// }
//
// var test = findUniques(array1, array2);
//
// console.log(test);




function findMinutes(n) {

    var hours = 0;

    for(var i = n; i > 0; i--) {
        if( i % 60 === 0 ) {
            hours = i;
        }
    }

    var stringHours = toString(hours);

    var minutes = toString(n - (hours * 60));

    var result = stringHours + minutes;

    var resultInt = parseInt(result);


    return  (resultInt);
}













































