var mongoose = require('mongoose');

var UsersConstructor = mongoose.model(`Users`, {
    emailid: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    }
});

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