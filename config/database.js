const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

exports.connect = () => {
    mongoose.connect(MONGO_URI)
.then(console.log('Database is Running ... '))
.catch((err) => {console.log('Database Error: ' + err)})
}