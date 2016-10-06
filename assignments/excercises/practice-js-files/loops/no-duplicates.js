function splitDups(input) {

    var singleLetArray = [];

    var repeatLetArray = [];

    for (var i = 0; i < input.length; i++) {
        if (singleLetArray.valueOf(i) !== -1){
            singleLetArray.push(input[i]);
        } else {
            repeatLetArray.push(input[i]);
        }
    }

    console.log(singleLetArray, repeatLetArray);

}

console.log(splitDups("llllllll"));
