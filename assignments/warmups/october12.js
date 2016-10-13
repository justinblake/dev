/*totalCoins of type Number
 // name of type String
 status of type String (options are Powered Up, Big,Small, and Dead)
 star of type Boolean (Is a star active?)
 setName of type function - sets name to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"
 gotHit of type function - this is called whenever Mario is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up")
 gotPowerup of type function - called when a powerup is received and sets the status accordingly
 gameActive of type Boolean, true by default, becomes false when status is Dead
 addCoin of function - adds a coin to totalCoins

 print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:

 Name: Luigi,
 // Status: Small, etc, etc*/


var superMario = {
    name: '',
    totalCoins: 0,
    status: '',
    statusChoices: ['Powered Up', 'Big', 'Small', 'Dead'],
    starType: true,
    setName: function (namePicked) {
        this.name = namePicked;
    },
    gotHit: function () {
        if (this.status === 'Powered Up') {
            this.status = this.statusChoices[1];
        } else if (this.status === 'Big') {
            this.status = this.statusChoices[2];
        } else {
            this.status = this.statusChoices[3];
            this.gameActive = false;
        }
    },
    gotPowerup: function () {
        if (this.status === "Small") {
            this.status = this.statusChoices[1]
        } else {
            this.status = this.statusChoices[2]
        }
    },
    gameActive: true,
    addCoin: function () {
        this.totalCoins++;
    },
    print: function () {
        console.log("Welcome " + this.name + ". You have " + this.totalCoins + ". Currently your status is " + this.status +
            ". It looks like you might have a star currently. Star type is " + this.starType)
    },
    ranNum: 0,
    randomNumber: function () {
        ranNum = Math.floor(Math.random() * 3);
        ranNumParse = parseInt(ranNum);

        if (ranNumParse === 0) {
            this.gotHit();
            console.log(superMario);
        } else if (ranNumParse === 1) {
            this.gotPowerup();
            console.log(superMario);
        } else {
            this.addCoin();
            console.log(superMario);
        }

    }

};

// Create a random range function that returns either 0, 1, or 2.
//
// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function
//
// Then call the print function on the object.
//
// Perform this random operation 3 different times and call that print function 3 different times.
