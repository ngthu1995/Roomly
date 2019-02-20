const mongoose = require('mongoose')


const calculateSchema = new mongoose.Schema({
    origins: String,
    destinations: String,
})