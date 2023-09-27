const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema(
    {
        address: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            min: 5
        },
        online: {
            type: Boolean,
            required: true
        },
        link: {
            type: String,
            required: false,
            trim: true,
            lowercase: false,
            unique: false,
            min: 5
        },
        longitude: {
            type: Number,
            required: true,
            trim: true,
            unique: false
        },
        latitude: {
            type: Number,
            required: true,
            trim: true,
            unique: false
        }
    },
    {
        timestamps: true
    }
)

const Location = mongoose.model('Location', LocationSchema)
module.exports = { Location }