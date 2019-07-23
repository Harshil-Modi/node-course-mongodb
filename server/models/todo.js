var mongoose = require('mongoose');

var TodoCon = mongoose.model(`Todos`, {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//new TodoCon().find().toArray().then();
module.exports = {
    Todo: TodoCon
};

// var Todo = new TodoCon({
//     text: "Some other thing to do"
// });

// Todo.save().then((result) => {
//     console.log(result)
// }, (e) => console.log(e));
