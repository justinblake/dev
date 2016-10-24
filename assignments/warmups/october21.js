var count = 0;

var input = prompt('please enter a word or phrase to see if it is a palindrome');

var originalInput = input;



var stripInput = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

var noSpacesInput = stripInput.replace(/ +/g, "");

var isPalindrome;

function checkWord() {

    for(var i = 0; i < noSpacesInput.length; i++) {
        var firstLetter = noSpacesInput.charAt(i);
        var lastLetter = noSpacesInput.charAt(noSpacesInput.length - (i + 1));


        if( firstLetter === lastLetter) {
            i++
        } else {
            isPalindrome = false;
            break
        }

        isPalindrome = true;
    }


    return(isPalindrome);

}



var test = checkWord();
console.log('It is a ' + isPalindrome + ' statement to say that ' + originalInput + ' is a palindrome.');


