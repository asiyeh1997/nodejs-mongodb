const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    console.log('Connected Successfully!')

    const db = client.db('MyTodoApp')

    db.collection('Todos').insertOne({
        title: "Friday",
        text: "Somethings To do",
        completed: false
    }),
        (err, result) => {
            if (err) {
                return console.log('Unable To Insert Todo', err)
            }
            console.log(JSON.stringify(result.ops, undefined, 2))//ops acsess to all thing
        }

    // db.collection('Users').insertOne({

    //     name: "Asiyeh",
    //     age:22,
    //     location:"Tabriz"
    // }),
    //     (err, result) => {
    //         if (err) {
    //             return console.log('Unable To Insert Users', err)
    //         }
    //         console.log(JSON.stringify(result, undefined, 2))//ops acsess to all thing
    //     }



    client.close();
})