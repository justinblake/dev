var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [5, 6, 7, 8, 9, 10, 11, 12, 13];

function findUnique(arr1, arr2, arr3) {
    var newArray = [];
    var duplicates = [];

    var masterArray = arr1.concat(arr2, arr3);

    console.log(masterArray)


    for(var i = 0; i < masterArray.length; i++) {

        if(masterArray.indexOf(masterArray[i]) === -1) {

            if(newArray.indexOf(masterArray[i]) === -1) {
                newArray.push(masterArray[i]);
            } else{
                duplicates.push(masterArray[i]);
            }
        }
    }

    return newArray;
}
var test = findUnique(array1, array2, array3);
console.log(test);