const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    fromUser: { type: Schema.Types.ObjectId, ref: 'User' },
    fromStripeCustomerId: String,
    toUser: { type: Schema.Types.ObjectId, ref: 'User' },
    tokenId: String,
    charge: Schema.Types.Mixed,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    totalPrice: Number
})

module.exports = mongoose.model(paymentSchema, 'Payment')