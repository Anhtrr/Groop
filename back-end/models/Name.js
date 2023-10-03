
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NameSchema = new Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        first: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 2
        },
        last: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 2
        },
        full: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: false,
            min: 5
        }
    },
    {
        timestamps: true
    }
)

const Name = mongoose.model('Name', NameSchema)
module.exports = { Name }

