const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, client) => {
    if (err) {
        return console.log(err);
    }
    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5d03a8fea03bbb94e3ac4b79')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(`Unable to update due to reason: ${err}`);
    //     });

    db.collection('Users').findOneAndUpdate({ name: 'abc' }, {
        $set: {
            name: 'Harshil Modi'
        },
        $inc: {
            age: 5
        }
    }, {
            returnOriginal: false
        }).then((result) => console.log(result),
            (err) => console.log(`Unable to update due to reason: ${err}`));
});