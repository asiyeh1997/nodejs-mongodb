const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    console.log('Connected mongodb Successfully!')

    const db = client.db('MyTodoApp')

    db.collection('Todos').find({completed: true}).forEach(element => {
        console.log(element['text']);
    });

    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     //console.log(`Todos count ${count}`);
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // })

    client.close();
})