

function breakArray(inputArray) {

    var itemsFromArray = {
        numbers: [],
        strings: [],
        objects: [],
        arrays: []
    };

    for( var i = 0; i < inputArray.length; i++) {

        if(typeof inputArray[i] === 'number') {
            itemsFromArray.numbers.push(inputArray[i]);

        } else if (typeof  inputArray[i] === 'string') {
            itemsFromArray.strings.push(inputArray[i])
        } else if (typeof inputArray[i] === 'object') {
            if(Array.isArray(inputArray[i]) === true) {
                itemsFromArray.arrays.push(inputArray[i]);
            } else {
                itemsFromArray.objects.push((inputArray[i]))
            }
        }

    }


    return itemsFromArray;

}

console.log(breakArray([1, 4, 3, 23, "candy", "corn", "is", "the", "best", [1],["dogs", 2], { keys: "values", numbers: 7}]));
