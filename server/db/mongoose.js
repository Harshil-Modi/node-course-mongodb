const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (process.env.PORT) {
    mongoose.connect(`mongodb+srv://admin:Admin@123@node-course-nl65m.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => {
        console.log("Connected to mongodb.net");
    });
} else {
    mongoose.connect(`mongodb://localhost:27017/TodoApp`, { useNewUrlParser: true });
    
}

module.exports = { mongoose };