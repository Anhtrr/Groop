const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SplitToSchema = new Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        resolved: {
            type: Boolean,
            required: true
        },
        paymentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment',
            required: true
        }
    },
    {
        timestamps: true
    }
)

const SplitTo = mongoose.model('SplitTo', SplitToSchema)
module.exports = { SplitTo }