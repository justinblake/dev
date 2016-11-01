
function newTest(input) {

    var newHold = input.join(' ');
    console.log(newHold);

    var empty = '';
    var empty2 = '';

    for( var i = 0; i < newHold.length; i++) {
        if( newhold[i].length > newHold[i+1].length) {
            empty = newHold[i];
            if( newHold[i].length > empty.length) {
                empty = newHold[i];
            }

        } else {
            newHold[i+1] = empty;
        }


    }

    return empty;

}

