var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

var uuid = require('uuid');


var bounties = [
    {
        firstName: "Tim",
        lastName: "Riggins",
        living: true,
        bountyAmount: 5000,
        type: "Sith",
        id: uuid.v4()
    },{
        firstName: "Clark",
        lastName: "Kent",
        living: true,
        bountyAmount: 5000,
        type: "Sith",
        id: uuid.v4()
    },{
        firstName: "John",
        lastName: "Snow",
        living: true,
        bountyAmount: 5000,
        type: "Sith",
        id: uuid.v4()
    },{
        firstName: "Steve",
        lastName: "Moulton",
        living: true,
        bountyAmount: 5000,
        type: "Sith",
        id: uuid.v4()
    }
];


app.get("/bounties", function (req, res) {
    res.send(bounties);
});

app.get("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {

            res.send(bounties[i]);
        }
    }
});

app.post("/bounties", function (req, res) {
    var bounty = req.body;
    bounty.id = uuid.v4();
    bounties.push(bounty);
    res.send(bounty);
});

app.put('/bounties/:id', function (req, res) {



    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {
            bounties[i] = req.body;
        }
    }



});

app.delete('/bounties/:id', function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {
            bounties.splice(i, 1);
            break;
        }
    }
    res.send(bounties);
});





app.listen(8000, function () {
    console.log("Server is listening on port 8000");
});