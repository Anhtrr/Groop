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
            enum: ['tentative', 'confirmed', 'cancelled', 'ongoing', 'completed'],
            default: 'tentative'
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location',
            required: true
        },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserLinkedType'
        }],
        payments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PaymentType',
            required: false
        }]
    },
    {
        timestamps: true
    }
)

const Event = mongoose.model('Event', EventSchema)
module.exports = { Event }