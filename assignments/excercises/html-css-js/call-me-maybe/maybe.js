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

    var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);

    if (hasDuplicates) {



        setTimeout(function () {
            sendText(name)
        }, 3000)

    } else {

        if (name % 2 === 0) {



            setTimeout(function () {
                call(name)
            }, 3000)

        } else {



            setTimeout(function () {
                dontCall(name)
            }, 3000)

        }
    }
}

for (var i = 0; i < names.length; i++) {

    var str = names[i];
    attemptCall(str, call, dontCall, sendText);


}
