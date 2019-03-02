const { normalizeErrors } = require('../helpers/mongoose')
const Payment = require('../models/payment')
const config = require('../config/keys');
const stripe = require('stripe')(config.STRIPE_SECRET_KEY)
const User = require('../models/auth')

exports.charge = (req, res) => {
    const payment = req.body;

    const user = res.locals.user

    Payment.findById(payment._id)
        .populate('toUser')
        .exec(async (err, foundPayment) => {
            if (err) {
                return res.status(422).send({ errors: normalizeErrors(err.errors) })
            }

            if (user.id === foundPayment.toUser.id) {
                const charge = await stripe.charge.create({
                    amount: foundPayment.totalPrice * 100,
                    currency: 'usd',
                    customer: payment.fromStripeCustomerId
                })

                foundPayment.charge = charge;

                foundPayment.save((err) => {
                    if (err) {
                        return res.status(422).send({ errors: normalizeErrors(err.errors) })
                    }

                    User.update({ _id: foundPayment.toUser }, {
                        $inc: { revenue: foundPayment.amount }
                    }, (err, user) => {
                        if (err) {
                            return res.status(422).send({ errors: normalizeErrors(err.errors) })
                        }

                        return res.json({ foundPayment })
                    })

                })
            }
        })
}