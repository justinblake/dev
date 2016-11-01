var num1;
var num2;
var total;

function saveNum1() {

    var userNum = document.getElementById("num-choice-add");
    var num1 = userNum.value;
    console.log(num1);

    return num1;

}

function saveNum2() {
    var userNum = document.getElementById("sec-num-choice-add");
    var num2 = userNum.value;
    console.log(num2);

    return num2;
}

function sumEntry(num1, num2) {

    var parsNum1 = parseInt(num1);
    var parsNum2 = parseInt(num2);

    console.log(parsNum1);
    console.log(parsNum2);

    var total = parsNum1 + parsNum2;

    console.log(total);

    var span = document.createElement("span");
    var txtNode = document.createTextNode(total);

    span.appendChild(txtNode);
    var ul = document.getElementById('total-sum-add');
    ul.appendChild(span);

}

function subNum1() {

    var userNum = document.getElementById("num-choice-sub");
    var num1 = userNum.value;
    console.log(num1);

    return num1;

}

function subNum2() {
    var userNum = document.getElementById("sec-num-choice-sub");
    var num2 = userNum.value;
    console.log(num2);

    return num2;
}

function subTotal(num1, num2) {

    var parsNum1 = parseInt(num1);
    var parsNum2 = parseInt(num2);

    console.log(parsNum1);
    console.log(parsNum2);

    var total = parsNum1 - parsNum2;

    console.log(total);

    var span = document.createElement("span");
    var txtNode = document.createTextNode(total);

    span.appendChild(txtNode);
    var ul = document.getElementById('total-sum-sub');
    ul.appendChild(span);

}

function multNum1() {

    var userNum = document.getElementById("num-choice-mult");
    var num1 = userNum.value;


    return num1;

}

function multNum2() {
    var userNum = document.getElementById("sec-num-choice-mult");
    var num2 = userNum.value;


    return num2;
}

function multTotal(num1, num2) {

    var parsNum1 = parseInt(num1);
    var parsNum2 = parseInt(num2);

    console.log(parsNum1);
    console.log(parsNum2);

    var total = parsNum1 * parsNum2;

    console.log(total);

    var span = document.createElement("span");
    var txtNode = document.createTextNode(total);

    span.appendChild(txtNode);
    var ul = document.getElementById('total-sum-mult');
    ul.appendChild(span);

}


