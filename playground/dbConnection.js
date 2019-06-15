const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);
    var db = client.db('TodoApp');

    // db.collection(`Todos`).insertOne({
    //     text: `Some task`,
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`Unable to insert data due to: `, err);
    //     }
    // });

    db.collection(`Users`).insertOne({
        name: `Harshil Modi`,
        age: 19,
        location: `Surat`
    }, (err, result) => {
        if (err) {
            return console.log(`Unable to insert data due to: `, err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});