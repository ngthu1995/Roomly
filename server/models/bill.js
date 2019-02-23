const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date },
    description: String,
    time: String,
    city: { type: String, default: 'San Francisco' },
    street: String,
    image: String,
})

module.exports = mongoose.model('Bill', billSchema)