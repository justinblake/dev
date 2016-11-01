
function randomNumber() {
    var ranNum = Math.ceil(((Math.random()) * 5));
    return (ranNum === 5);
}

function Location() {
    this.isShip = randomNumber();
    this.isHit = false;
    this.myDisplay = 'O';
}


var grid = [];

function createGrid() {
    for(var i = 1; i <= 10; i++) {
        var tempGrid = [];
        for( var j = 1; j <= 10; j++) {
            var newArrayEntry = new Location();
            tempGrid.push(newArrayEntry);
        }
        grid.push(tempGrid)
    }

    return grid;
}



module.exports.grid = createGrid();


