var { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('../server/models/todo');
var { User } = require('../server/models/user');

Todo.remove({})
  .then((todo) => console.log(todo))
  .catch((err) => console.log(err));