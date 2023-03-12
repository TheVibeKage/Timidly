const PORT = 8000
const express = require('express')
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://Goblin760:tSevdWPvJtTfuzIB@cluster0.us83zam.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.get('/signup', (req, res) => {

})

app.listen(PORT, ()=> console.log('Server running on PORT ' + PORT))

