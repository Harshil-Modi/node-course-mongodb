const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

if (process.env.PORT) {
    mongoose.connect(`mongodb+srv://admin:Admin@123@node-course-nl65m.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useFindAndModify: false }).then(() => {
        console.log("Connected to mongodb.net");
    });
} else {
    console.log("Connected to local mongodb server");    
    mongoose.connect(`mongodb://localhost:27017/TodoApp`, { useNewUrlParser: true, useFindAndModify: false });
}
module.exports = { mongoose };