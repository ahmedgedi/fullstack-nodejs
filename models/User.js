const mongoose = require('mongoose')
const { Schema } = mongoose // ES2015 destructuring 

const userSchema = new Schema({
    googleID: String,
    credits: {type: Number, default: 0}
})

mongoose.model('users', userSchema)