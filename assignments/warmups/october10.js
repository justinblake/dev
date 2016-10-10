function countCode(input) {

    var newStr = 0;

    for (var i = 0; i < input.length - 3; i++) {


        if (input[i] + input[i + 1] + input[i + 3] === 'coe') {
            newStr++
        } else {
            i++;
        }
        return newStr
    }
}