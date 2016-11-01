
// The parameter weekday is true if it is a weekday,
// and the parameter vacation is true if we are on
// vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in.

// function sleepIn(weekday, vacation){
//
//
// }
//
// sleepIn(false, false) // true
// sleepIn(true, false) // false
// sleepIn(false, true) // true
// Add Comment


function sleepIn(weekday, vacation) {
    var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    var endOfWeek = ['Saturday', 'Sunday'];

    if(week.indexOf(weekday) === -1 || vacation) {
        console.log('We sleep in');
    }
    else {
        console.log('No Sleeping in today')
    }
}



















// function fizz(input, word1, word2) {
//
//
//     for (var j = 1; j < input; j++) {
//
//         if (j % 3 === 0 && j % 5 !== 0) {
//             console.log(word1 + ' ' + j);
//
//         }
//         else if (j % 5 === 0 && j % 3 !== 0) {
//             console.log(word2  + ' ' + j);
//
//         }
//         else if (j % 3 === 0 && j % 5 === 0) {
//             console.log(word1  + word2  + ' ' +  j)
//         }
//
//     }
//
// }
//
// fizz(101, 'bull', 'shit');