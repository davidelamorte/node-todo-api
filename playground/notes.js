let user1 = new User({
    email: 'user1@gmail.com'
})

user1.save().then((doc) => {
    console.log(doc)
}, (err) => {
    console.log(err)
})

// let newTodo = new Todo({
//     text: 'Cook dinner'
// })

// newTodo.save().then((doc)=>{
//     console.log('Saved todo: ', doc)
// }, (err)=>{
//     console.log('Unable to save Todo')
// })

// let todoTwo = new Todo({
//     text: 'Do exercise',
//     completed: false,
//     completedAt: 254523
// })

// todoTwo.save().then((doc)=>{
//     console.log(doc)
// }, (err)=>{
//     console.log(err)
// })