const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    console.log('Connected mongodb Successfully!')

    const db = client.db('MyTodoApp')

    db.collection('Todos').deleteOne({text:"Hi Dear"}).then((result)=>{
        console.log(result);
    })

    client.close();
})