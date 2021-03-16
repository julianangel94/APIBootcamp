const mongoose = require('mongoose')

const connectionString = `mongodb+srv://julianangel94:cristo1994@cluster0.xgekt.mongodb.net/notesDatabase?retryWrites=true&w=majority`

//CONEXION MONGO DB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log('Database connected')
}).catch(error =>{
    console.error(error)
}) 