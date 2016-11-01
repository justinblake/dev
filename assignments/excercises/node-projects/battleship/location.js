

var displayGrid = require('./grid');

function displayDemo() {

    var myGrid = displayGrid.grid;

    var newArray = [];

    for( var i = 0; i < 10; i++) {
        var tempArray = [];

        for( var j = 0; j < 10; j++) {
            var tempObject = myGrid[i][j];
            tempArray.push(tempObject.myDisplay);
        }

        newArray.push(tempArray);

    }

    console.log(newArray);

}

displayDemo();
