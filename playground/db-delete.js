const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(err);
    }
    var db = client.db('TodoApp');

    // deleteMany()
    // db.collection('Todos').deleteMany({ name: 'Harshil Modi' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(`Unable to delete at this moment due to reason: ${err}`);
    // });

    /*
     * deleteOne()
     */
    // db.collection('Todos').deleteOne({ name: 'Harshil Modi' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //         console.log(`Unable to delete data at this moment due to reason: ${err}`);
    // });

    // findOneAndDelete()
    // db.collection('Todos').findOneAndDelete({ name: 'Harshil Modi' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //         console.log(`Unable to delete data at this moment due to reason: ${err}`);
    // });

    db.collection('Users').deleteMany({ name: 'Harshil Modi' }).then((result) => {
        console.log(`${result.n} records deleted`);
    }, (err) => {
        console.log(`Unable to delete data at this moment due to reason: ${err}`);
    });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5d03985da03bbb94e3ac48a3') }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(`Unable to delete data at this moment due to reason: ${err}`);
    });
});