// Http Requests have 4 parts:
// 1. Url
// 2. Headers
// 3. [Body]
// 4. Method





var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());


var puppies = [
    {
        name: 'Fido',
        breed: 'Beagle',
        id: 1
    },
    {
        name: 'Frank',
        breed: 'Pug',
        id: 2
    },
    {
        name: 'Filly',
        breed: 'Rover',
        id: 3
    }
];


app.get('/', function (req, res) {

    res.send('testResponse');

});

app.post('/fuck', function (req, res) {

    console.log(req.body);
    puppies.push(req.body);
    console.log(puppies);
    res.send(puppies);

});

app.delete('/fuck/:id', function(req, res) {



    for (var i = 0; i <= puppies.length; i++) {
        if(puppies[i].id === parseInt(req.params.puppyId)) {
            puppies.splice(i, 1);
            break;
        }
    }

    res.send(puppies);


});

app.listen(8000, function () {
    console.log('Server is listening on port 8000');
});