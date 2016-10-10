// var goomba = 0;
// var bomb = 0;
// var cheep = 0;


function displayTotals() {


$('#getTotals').click(function() {
    var goomba2 = $('#goombaTotal').val();
    var goombaToInt = parseInt(goomba2);
    var goomba = goombaToInt * 5;

    $('#goombaCost').html(goomba);

    var bomb2 = $('#bombTotal').val();
    var bombToInt = parseInt(bomb2);
    var bomb = bombToInt * 7;


    $('#bombCost').html(bomb);


    var cheep2 = $('#cheepTotal').val();
    var cheepToInt = parseInt(cheep2);
    var cheep = cheepToInt * 11;


    $('#cheepCost').html(cheep);

    var finalSum = goomba + bomb + cheep;

    $('#grandTotal').html(finalSum);
});


}

displayTotals();
