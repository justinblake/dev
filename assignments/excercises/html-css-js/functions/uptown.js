var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"];


function printArray(lyrics) {

    var newSent = lyrics.toString();

    var splitSent = newSent.replace(/,/g, " ");

    return (splitSent);

}

console.log('-------');
console.log(printArray(lyrics));
console.log('-------');

function reverseArray(lyrics) {

    var flipArray = lyrics.reverse();

    var splitSent = flipArray.toString().replace(/,/g, ' ');

    return (splitSent);

}
console.log('-------');

console.log(reverseArray(lyrics));

console.log('-------');





function everyOther() {
    var emptArr = [];

    for (var i = 0; i < lyrics.length; i+=2) {
        emptArr.push(lyrics[i]);

    }


    var splitSent = emptArr.toString().replace(/,/g, ' ');

    return splitSent;

}

console.log('-------')
console.log(everyOther());



















































