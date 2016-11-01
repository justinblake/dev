
function acceptEntry() {
    var entryOne = prompt('Please enter a number');
    var entryTwo = prompt('Please enter a second number');

    if (entryOne < entryTwo) {
        console.log(entryOne);
    } else if ( entryTwo < entryOne) {
        console.log(entryTwo);
    } else {
        console.log('they must be equal');
    }
}

acceptEntry();


function twoMonkeys(aSmile, bSmile) {

    if (aSmile && bSmile || !aSmile && !bSmile) {
        return(true);
    } else {
        return(false);
    }

}

twoMonkeys();


function appropGreet() {

    var newDate = new Date();
    var timeOfDay = newDate.getHours();

    if (timeOfDay < 12) {
        console.log('Good Morning');
    } else if (timeOfDay < 17) {
        console.log('Good Afternoon');
    } else if (timeOfDay < 24) {
        console.log('Good Evening');
    } else {
        console.log('you are on another plannet')
    }


}

appropGreet();


