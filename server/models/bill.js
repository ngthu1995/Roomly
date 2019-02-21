const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date },
    description: String,
    time: String,
    address: { type: String, required: true },
    image: String
})

module.exports = mongoose.model('Bill', billSchema)