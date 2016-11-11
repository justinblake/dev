var express = require('express');
var app = express();

// var cors = require('cors');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var uuid = require('uuid');


var todos = [
    {
        name: "Clean The House",
        description: "All The Cleaning",
        imageUrl: "www.some-cleaning-url.com",
        completed: false,
        id: uuid.v4()
    },
    {
        name: "Vaccum The Carpet",
        description: "Vaccuming",
        imageUrl: "www.some-vaccuming-url.com",
        completed: false,
        id: uuid.v4()
    },
    {
        name: "Wash The Dishes",
        description: "Washing Dishes",
        imageUrl: "www.some-dish-washing-url.com",
        completed: false,
        id: uuid.v4()
    }
];

app.get('/list-of-todos', function (req, res) {
    res.send(todos);
});

app.get('/one-todo/:todoId', function (req, res) {

    var oneTodo = {};

    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.todoId) {
            oneTodo = todos[i];
        }
    }

    res.send(oneTodo);

});

app.post('/add-new-todo', function (req, res) {
    var todo = req.body;
    todo.id = uuid.v4();
    todos.push(todo);
    res.send(todo);
});

app.put('/update-todo/:todoId', function (req, res) {
    var updateTodo = req.body;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.todoId) {
            todos[i] = req.body;
        }
    }

    res.send(updateTodo);
});

app.delete('/delete-todo/:todoId', function (req, res) {


    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.todoId) {
            todos.splice(i, 1);
            break;
        }
    }
    res.send(todos);
});

app.listen(8000, function () {
    console.log('The server is running');
});