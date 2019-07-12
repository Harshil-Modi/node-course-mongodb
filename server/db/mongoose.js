const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://localhost:27017/TodoApp`, { useNewUrlParser: true });
mongoose.connect(`mongodb+srv://admin:Admin@123@node-course-nl65m.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => {
    console.log("Connected to mongodb.net");
});

module.exports = { mongoose };