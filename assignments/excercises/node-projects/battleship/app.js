var readline = require('readline-sync');
var newGrid = require('./grid');

function playGame() {
    var myGrid = newGrid.grid;

    var hitShips = 0;
    var newArray = [];

    for (var i = 0; i < 10; i++) {
        var tempArray = [];
        for (var j = 0; j < 10; j++) {
            var tempObject = myGrid[i][j];
            tempArray.push(tempObject.myDisplay);
        }
        newArray.push(tempArray);
    }

    var guessedCoordinates = [];

    while (hitShips < 3) {
        var coordOne = readline.question("Please enter a number between 0 and 9: ");
        var coordTwo = readline.question("Please enter a number between 0 and 9: ");
        var coord1 = parseInt(coordOne);
        var coord2 = parseInt(coordTwo);
        var newGuess = coordOne + coordTwo;

        if (guessedCoordinates.indexOf(newGuess) === -1) {
            var temporaryShipObject = myGrid[coord1][coord2];
            if (temporaryShipObject.isShip === true) {
                hitShips += 1;
                temporaryShipObject.isHit = true;
                newArray[coord1][coord2] = 'X';
                console.log('You Hit a ship!');
                console.log('You have hit ' + hitShips + " ship(s)!");
                console.log(newArray);
            } else {
                newArray[coord1][coord2] = 'M';
                console.log('That was a miss!');
                console.log(newArray);
            }
            guessedCoordinates.push(newGuess);
        } else {
            console.log('You have already guessed that coordinate, please try again');
        }
    }
    console.log('game over');
}
playGame();

