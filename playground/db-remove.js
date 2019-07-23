var { ObjectId } = require('mongodb');

var { mongoose } = require('mongoose');

var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');

Todo.remove({}).then((todos) => console.log(todos));

Todo.findByIdAndRemove(`5d09876710f3b43cc8ac9b90`).then((todo) => console.log(todo));

Todo.findOneAndRemove({ _id: `5d09876710f3b43cc8ac9b90`}).then((todo) => console.log(todo));