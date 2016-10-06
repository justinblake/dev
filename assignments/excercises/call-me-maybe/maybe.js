var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function call(name) {
    console.log("I just called " + name);
}

function dontCall(name) {
    console.log('I did not call ' + name);
}

function sendText(name) {
    console.log('I just sent a text to ' + name);
}

function attemptCall(name, call, dontCall, sendText) {


}

for (var i = 0; i <= names.length; i++) {

    var str = names[i];
    var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);

    if (hasDuplicates) {
        var arrayNameText = names[i];
        sendText(arrayName);
    } else {

        if (names[i] % 2 === 0) {
            var arrayName = names[i];
            call(arrayName);
        } else {
            var arrayNameOdd = names[i];
            dontCall(arrayNameOdd);

        }
    }

}
