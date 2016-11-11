var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var add = require('./my-object');
app.use(add);

app.get('/justin', function(req, res) {

    var test = req.newObject;

    console.log(test);

    res.send(test);



});

app.listen(8000, function() {
    console.log("Server running on 8000")
});