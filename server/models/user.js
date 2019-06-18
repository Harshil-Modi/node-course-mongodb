var mongoose = require('mongoose');

var UsersConstructor = mongoose.model(`users`, {
    emailid: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    }
});

var u = new UsersConstructor();

// u.find({}).toArray().then((docs) => console.log(docs), (e) => console.log(e));

module.exports = {
    User: UsersConstructor
};

/*

var Users = new UsersConstructor({
    emailid: "text@test.com"
});

Users.save().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (e) => console.log(`Something went wrong\nReason:${e}`));

*/