var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');
var { Todo } = require('./models/todo');

var app = express();
var port = 3000;

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400)
            .send(err);
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});