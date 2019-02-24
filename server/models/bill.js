const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    description: String,
    city: { type: String, default: 'San Francisco' },
    street: String,
    image: String,
    createdAt: { type: Date, default: Date.now() },
    userName: String
})

module.exports = mongoose.model('Bill', billSchema)