var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var puppies = [
    {
        name: "Fido",
        breed: "Beagle",
        id: 1
    },
    {
        name: "Hamilton",
        breed: "Labradoodle",
        id: 2
    },
    {
        name: "Emma",
        breed: "Burnese Mountain",
        id: 3
    }
];

app.get("/puppies", function(req, res) {
    res.send(puppies);
});

app.get("/puppies/:puppyId", function(req, res) {
    for (var i = 0; i < puppies.length; i++) {
        if (puppies[i].id === parseInt(req.params.puppyId)) {
            res.send(puppies[i]);
        }
    }
});

app.post("/puppies", function(req, res) {
    puppies.push(req.body);
    res.send(req.body);
});

app.put("/puppies/:puppyId", function(req, res) {
    for (var i = 0; i < puppies.length; i++) {
        if (puppies[i].id === parseInt(req.params.puppyId)) {
            puppies[i] = req.body;
            res.send(puppies);
        }
    }
});

app.delete("/puppies/:puppyId", function (req, res) {
    for (var i = 0; i < puppies.length; i++) {
        if (puppies[i].id === parseInt(req.params.puppyId)) {
            puppies.splice(i, 1);
            break;
        }
    }
    res.send(puppies);
});

app.listen(8000, function() {
    console.log("Server is listening on port 8000");
});
