const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: String,
    content: String,
    zipCode: Number,
    image: String,
    description: String,
    category: String,
})