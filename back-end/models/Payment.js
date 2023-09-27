const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 3
        },
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 5
        },
        totalAmount: {
            type: Number,
            required: true,
            trim: true,
            unique: false,
            min: 1
        },
        currency: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 3
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: false
        },
        paidBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        splitTo: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SplitTo',
            required: true
        }]
    },
    {
        timestamps: true
    }
)

const Payment = mongoose.model('Payment', PaymentSchema)
module.exports = { Payment }