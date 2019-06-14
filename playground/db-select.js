const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB server due to reason: ${err}`);
    }
    console.log(`Connected to MongoDB server`);
    var db = client.db(`TodoApp`);
    //find({completed: false})
    // db.collection(`Todos`).find().toArray().then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => console.log(`Unable to fetch data due to reason: ${err}`));


    // Fetching data using id

    db.collection('Todos').find({
        _id: new ObjectID('5d024c27661a7d2758026b16')
    }).toArray().then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => console.log(`Unable to fetch data due to reason: ${err}`));
    // client.close();
});