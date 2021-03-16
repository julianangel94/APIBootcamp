const {Schema, model} = require('mongoose')

const noteSchema = new Schema({
    content: String,
    date: Date,
    important: Boolean
})

const Note = model('Note', noteSchema)

// Note.find({}).then(result => {
//     console.log(result)
//     mongoose.connection.close()
// })

// const note = new Note({
//     content: 'MongoDb es increible, julian dev',
//     date: new Date(),
//     important: true
// })

// note.save().then(result => {
//     console.log(result)
//     mongoose.connection.close() // buena practica
// }).catch(error => {
//     console.error(error)
// })

module.exports = Note