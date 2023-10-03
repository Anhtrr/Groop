const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
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
        picturePath: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        eventsID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: false
        }]
    },
    {
        timestamps: true
    }
)

const Category = mongoose.model('Category', CategorySchema)
module.exports = { Category }