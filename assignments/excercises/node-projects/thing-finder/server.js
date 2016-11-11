var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var balls = [
    {
        type: 'basketball',
        numOfPlayers: 5,
        lengthOfGame: '48 Minutes'
    },
    {
        type: 'baseball',
        numOfPlayers: 9,
        lengthOfGame: '9 Innings'
    },
    {
        type: 'football',
        numOfPlayers: 11,
        lengthOfGame: '60 Minutes'
    },
    {
        type: 'blue',
        numOfPlayers: 1,
        lengthOfGame: 'Depends on the significant other'
    }
];

app.get('/balls', function (req, res) {

    res.send(balls);

});

app.get('/balls/:ballType', function (req, res) {

    var typeArray = [];

    for (var j = 0; j < balls.length; j++) {
        if(req.params.ballType === "type") {
            typeArray.push(balls[j].type);
        }
    }

    for (var i = 0; i < balls.length; i++) {
        if(balls[i].type === req.params.ballType) {
            res.send(balls[i]);
        }
    }

    res.send(typeArray);

});


app.listen(8000, function () {
    console.log('Server is running on port 8000');
});