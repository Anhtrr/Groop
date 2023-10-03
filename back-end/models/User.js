const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        nameID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Name',
            required: true
        },
        username: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            min: 3
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            min: 3
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            min: 10
        },
        password: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 8
        },
        ppPath: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false
        },
        friendsID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }],
        eventsID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: false
        }],
        paymentsID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment',
            required: false
        }],
        paymentsInvolvedID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment',
            required: false
        }]
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema)
module.exports = { User }