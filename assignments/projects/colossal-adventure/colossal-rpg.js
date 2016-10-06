var readlineSync = require('readline-sync');

console.log('Welcome to this adventure game.');

var userName = readlineSync.question('Please Type Your Name: ');

var userObj = {
    name: userName,
    health: 30,
    attackStrength: 20,
    specialItems: []
};


var walkingEntry = readlineSync.question("Hello " + userObj.name + " to start your adventure please type a w: ");


var randNum = 1;

function randNumGenerator() {
    randNum = Math.random();
    return randNum;
}

var deathStatement;

function userHealth() {

    if (userObj.health <= 0) {
        deathStatement = "Unfortunately you are dead. Maybe next time don't use your face as a shield";
        walkingEntry = 'd';
        return deathStatement;
    } else {
        var outputText = 'Your health is now ' + userObj.health;
        return outputText;
    }

}



while (walkingEntry === 'w' || walkingEntry === 'ps') {


    var enemies = [
        {
            name: 'Drumpf',
            health: 5,
            specialItems: 'Little Baby Hands'

        },
        {
            name: 'Shillary',
            health: 2,
            specialItems: 'lot of money laundered through her foundation'

        },
        {
            name: 'Putin',
            health: 9,
            specialItems: 'ICBM'

        },
        {
            name: 'Ken Hammmmm',
            health: 1,
            specialItems: 'A worthless wooden ark'
        },
        {
            name: 'Ken Hammmmm2',
            health: 1,
            specialItems: 'Creation Denial Pamphlet'
        }
    ];


    walkingEntry = readlineSync.question("To keep walking, please type another w. To see your current inventory, type a ps:  ");

    if (walkingEntry === "ps") {
        console.log("Your name is " + userObj.name + " , You have " + userObj.health + " health. And here is a list of everything that is in your inventory: " + userObj.specialItems)
    } else {

        var enemyAppearsDecimal = randNumGenerator();

        //Don't Forget to change the 2 back to a 4

        var enemyAppears = Math.ceil(enemyAppearsDecimal * 5);

        if (enemyAppears === 1) {

            var whichEnemyDecimal = randNumGenerator();
            var parseWhichEnemy = Math.floor(whichEnemyDecimal * 4);
            var whichEnemy2 = parseInt(parseWhichEnemy);
            var whichEnemy = whichEnemy2 + 1;
            

            var fightOrFlight = readlineSync.question('A wild looking ' + enemies[whichEnemy].name + " has just jumped out from behind a bush. If you would like to fight, type f. If you would like to run, type r: ")


            if (fightOrFlight === 'r') {

                var runningDecimal = randNumGenerator();
                var parseRunning = Math.ceil(runningDecimal * 2);
                var running = parseInt(parseRunning);

                var enemyHPDecimal = randNumGenerator();
                var parseEnemyHP = Math.ceil((enemyHPDecimal) * 10);
                var enemyHP = parseInt(parseEnemyHP);

                if (running === 1) {
                    console.log('You were able to successfully run away without any damage to your health.')
                } else {

                    


                    console.log("Unfortunately you were struck as you were turning to run like a chicken and " + enemies[whichEnemy].name + ' did ' + enemyHP + " hp to your health");
                  
                    userObj.health -= enemyHP;
                   
                    var lastWishes = userHealth();
                    
                       
                    
                    console.log(lastWishes);
                    // walkingEntry = 'd';
                }

            } else if (fightOrFlight === 'f') {

                var userHPDecimal = randNumGenerator();
                var parseUserHP = Math.ceil(userHPDecimal * 10);
                var UserHP2 = parseInt(parseUserHP);
                var UserHP = UserHP2 + 10;

                var enemyFightHPDecimal = randNumGenerator();
                var parseEnemyFightHP = Math.ceil((enemyFightHPDecimal) * 10);
                var enemyFightHP = parseInt(parseEnemyFightHP);

                if (enemyFightHP >= userObj.health) {
                    userObj.health -= enemyFightHP;
                    var lastWishesFight = userHealth();
                    console.log(lastWishesFight);
                    walkingEntry = 'd';
                } else if (UserHP >= enemies[whichEnemy].health) {
                    
                    userObj.health -= enemyFightHP;
                    userObj.specialItems += enemies[whichEnemy].specialItems + ", ";


                    console.log("During the fight " + enemies[whichEnemy].name + " struck you and caused " + enemyFightHP + " hp worth of damage to your health");
                    console.log('Your health is now ' + userObj.health);
                    console.log("Luckily you were able to strike back with " + UserHP + " worth of damage.");
                    console.log("Since the " + enemies[whichEnemy].name + " only had " + enemies[whichEnemy].health + " health, it has been destroyed.");
                    console.log("After searching through your dead enemy's belongings, you found a(n) " + enemies[whichEnemy].specialItems + " and you have now added it to your collection" +
                        " of special items. Currently your special items collection consists of: " + userObj.specialItems);
                }

                else {
                    continue;
                }


            } else {
                continue;
            }


        } else {
            continue;
        }

    }
}

