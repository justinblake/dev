

var userInput = prompt('Please enter a number: ');

function makeMoney(){

    var toArray = userInput.split('');

    var newArray = toArray.slice(toArray.length-2);

    var slicedArray = toArray.slice(toArray.length-5, toArray.length-2);

    var periodArray = ['.'];
    var commaArray = [','];

    newArray = periodArray.concat(newArray);
    console.log(newArray);

    newArray = slicedArray.concat(newArray);
    console.log(newArray);

    newArray = commaArray.concat(newArray);
    console.log(newArray);


    slicedArray = toArray.slice(toArray.length-8, toArray.length-5);


    slicedArray = commaArray.concat(slicedArray);
    newArray = slicedArray.concat(newArray);


    newArray = newArray.join("");

    console.log(newArray);


}

makeMoney();