const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    console.log('Connected mongodb Successfully!')

    const db = client.db('MyTodoApp')

    db.collection('Todos').findOneAndDelete({ 
        _id: new Object("5dca4f9a7bbc3b5f3476e343")
     },{
                $set: {
                    completed: false
                }
            },{
                returnOriginal : false
            }).then((result)=>{
            console.log(result)
        })

    // db.collection('Users').findOneAndUpdate({
    //     _id:new ObjectID("5dca51e53126004b7cbc46fe")
    // },{
    //     $inc:{
    //         age:2
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(JSON.stringify(result,undefined,2))
    // })

    client.close();
})