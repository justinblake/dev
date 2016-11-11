// Web page that shows a list of political issues
// Each item will have a title
// Each item will have a description
// Each item can be upvoted or downvoted
// Items will be ordered by upvotes (the most being at the top).
// Each item should show the total number of votes
// Web page will have a Post button that allows new posts
// Users can comment on posts (unlimited number of comments per post)
// On the back-end you will store all data in arrays or objects, no databases quite yet


var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(express.static(path.join("public")));

var uuid = require('uuid');

var issues = [
    {
        title: 'Abortion',
        description: 'Abortion allows women the ability to terminate a pregnancy',
        comments: ["Abortion example comment 1", "Abortion example comment 2", "Abortion example comment 3"],
        votes: 0,
        id: uuid.v4()
    },
    {
        title: 'Gun Control',
        description: 'Gun control limits access to guns',
        comments: ["Gun Control example comment 1", "Gun Control example comment 2", "Gun Control example comment 3"],
        votes: 0,
        id: uuid.v4()
    },
    {
        title: 'Church/State Separation',
        description: 'Laws that govern keeping god out of political issues',
        comments: ["Church/State Separation example comment 1", "Church/State Separation example comment 2", "Church/State Separation example comment 3"],
        votes: 0,
        id: uuid.v4()
    }
];

app.get('/issues', function(req, res) {
   res.send(issues);
});

app.post('/new-issue', function(req, res) {
    var issue = {};
    issue.title = req.body.title;
    issue.description = req.body.description;
    issue.comments = [];
    issue.votes = 0;
    var newComments = req.body.comments;
    issue.comments.push(newComments);
    issue.id = uuid.v4();
    issues.push(issue);
    res.send(issue);
});

app.put('/change-issue/:issueId', function(req, res) {
    for (var i = 0; i < issues.length; i++) {
        if(issues[i].id === req.params.issueId) {
            issues[i] = req.body;
            res.send(issues[i]);
        }
    }
});

app.put('/submit-comment/:issueId', function(req, res) {

    for (var i = 0; i < issues.length; i++) {
        if(issues[i].id === req.params.issueId) {
            var newComment = req.body.newComment;
            issues[i].comments.push(newComment);
            res.send(issues[i]);
        }
    }
});

app.put('/add-vote-counter/:issueId', function(req, res) {

    console.log('req.body.votes - ' + req.body.votes);
    for(var i = 0; i < issues.length; i++) {
        if(issues[i].id === req.params.issueId) {
            issues[i].votes = req.body.votes;
            res.send(issues[i]);
        }
    }

});

app.put('/subtract-vote-counter/:issueId', function(req, res) {

    console.log('req.body.votes - ' + req.body.votes);
    for(var i = 0; i < issues.length; i++) {
        if(issues[i].id === req.params.issueId) {
            issues[i].votes = req.body.votes;
            res.send(issues[i]);
        }
    }

});

app.delete('/remove-issue/:issueId', function(req, res) {
   for (var i = 0; i < issues.length; i++) {
       if(issues[i].id === req.params.issueId) {
           issues.splice(i, 1);
           break;
       }
   }
   res.send(issues);
});



app.listen(8000, function () {
    console.log("Server is listening on port 8000");
});