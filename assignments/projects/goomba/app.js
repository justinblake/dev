var goomba = 0;
var bomb = 0;
var cheep = 0;


function getTotals() {
    var initialGoomba = document.getElementById("goombaTotal");
    var goomba2 = initialGoomba.value;
    var goombaToInt = parseInt(goomba2);
    goomba = goombaToInt * 5;

    document.getElementById("goombaCost").value = goomba;

    var initialbomb = document.getElementById("bombTotal");
    var bomb2 = initialGoomba.value;
    var bombToInt = parseInt(bomb2);
    bomb = bombToInt * 7;

    document.getElementById("bombCost").value = bomb;

    var initialCheep = document.getElementById("cheepTotal");
    var cheep2 = initialCheep.value;
    var cheepToInt = parseInt(cheep2);
    cheep = cheepToInt * 11;

    document.getElementById("cheepCost").value = cheep;

    finalSum = goomba + bomb + cheep;

    document.getElementById("grandTotal").value = finalSum;
}



