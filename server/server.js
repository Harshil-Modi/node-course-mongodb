const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/todo', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400)
            .send(e);
    });
});

app.get('/todo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send(`Invalid id`);
    }
    Todo.findById(id).then((docTodo) => {
        if (!docTodo) {
            return res.status(404).send({ 'error': 'Not found' });
        }
        res.send({ docTodo });
    }, (e) => {
        res.status(400).send();
    });
});

app.delete('/todo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send(`Invalid id`);
    }
    Todo.findByIdAndRemove(id).then((deletedDoc) => {
        if (!deletedDoc) {
            return res.status(400).send({ "error": "Could not delete" });
        }
        res.status(200).send({ deletedDoc });
    }, (err) => {
        console.log(err);
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = {
    app
}