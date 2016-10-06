function helloWorld() {

    var test = 'hello world';

    return test

}

console.log(helloWorld());

var contacts = {
    justin: "801-123-1234",
    tim: "123-123-1234",
    ryan: "123-123-1235"
};

console.log(contacts.justin);

var shopper = {
    item1: "Pear",
    item2: 5,
    item3: true,
    item4: helloWorld(),
    groceryCart: ['apples','pears','milk','eggs','cheese']
};

console.log(shopper.groceryCart[1]);
console.log(shopper.item4);

console.log(shopper.groceryCart.slice([0],[5]));

if(isCoding==true){console.log('we are coding!')}
