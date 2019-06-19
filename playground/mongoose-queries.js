var { ObjectId } = require('mongodb');

var { mongoose } = require('mongoose');

var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');


var id = '5d03b78282216b1bd4939bc1';

// if (!ObjectId.isValid(id)) {
//     console.log("id not valid");
// } else {
    
// }

// Todo.find({
//     _id: id
// }).then((docs) => {
//     console.log("find()\n", JSON.stringify(docs, undefined , 2));
// }, (e) => console.log(e));

// Todo.findOne({
//     _id: id
// }).then((doc) => {
//     console.log("\n\nfindOne()\n", JSON.stringify(doc, undefined, 2));
// }, (e) => console.log(e));

// Todo.findById(id).then((doc) => {
//     console.log("\n\nfindById()\n", JSON.stringify(doc, undefined, 2));
// }, (e) => console.log(e));

User.findById(id).then((doc) => {
    // debugger;
    console.log(doc);
}, (e) => console.log(e));