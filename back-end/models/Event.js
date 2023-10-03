const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema(
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
        startDate: {
            type: Date,
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: false
        },
        endTime: {
            type: Date,
            required: false
        },
        public: {
            type: Boolean,
            required: true
        },
        status: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            default: 'tentative'
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        locationID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location',
            required: true
        },
        usersLinkedID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserLinked'
        }],
        paymentsID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment',
            required: false
        }]
    },
    {
        timestamps: true
    }
)

const Event = mongoose.model('Event', EventSchema)
module.exports = { Event }