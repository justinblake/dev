function Party(pName, population) {
    this.partyName = pName;
    this.population = population;
}

var penguins = new Party('Penguins', 1000000);

console.log(penguins);

var russians = new Party('Russians', 1000000);

console.log(russians);


//Coin Flip

var ranNum = 0;

function randomNumber() {
    var ranNumDecimal = Math.random();
    var ranNumWhole = Math.ceil((ranNumDecimal) * 50);
    ranNum = parseInt(ranNumWhole);

}

randomNumber();

console.log(ranNum);


var attackedParty;

if (ranNum < 25) {
    attackedParty = russians;
    console.log('The ' + attackedParty.partyName + ' are being attacked');
} else {
    attackedParty = penguins;
    console.log('The ' + attackedParty.partyName + ' are being attacked');
}


//Callback Functions

function onHit(party) {


    party.population -= (ranNum * 10000);
    console.log('The ' + party.partyName + 'now only have ' + party.population)

}

function onMiss(party) {
    console.log("The Attack Was Unsuccessful against the " + party.partyName);
}


function sendNuke(party, onHit, onMiss) {


    if (ranNum > 25) {
        onHit(party);

    } else {
        onMiss(party);

    }


}



function main() {


    while (true) {

        sendNuke(attackedParty, onHit, onMiss);



        console.log(attackedParty.partyName, attackedParty.population)

        if(attackedParty.population <= 0) {
            break
        }

        randomNumber();

        switchParty();
    }



}


function switchParty() {
    if (attackedParty === russians) {
        attackedParty = penguins;
    } else {
        attackedParty = russians;
    }
}

main();
