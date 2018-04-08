// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

// const obj = new ObjectID()
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    //findOneAndUpdate
//     db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID("5aca43bc278d15bcdd65193a")
//     }, {
//         $set: {
//             completed: true
//         }
//     }, {
//         returnOriginal: false
//     }
// ).then((result) => {
//     console.log(result)
// })

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aca4644278d15bcdd651a8c')
}, {
    $set: {
        name: 'Carlo'
    },
    $inc: {
        age: 1
    }   
}
).then((result)=>{
    console.log(result)
})
    
    // client.close()
})