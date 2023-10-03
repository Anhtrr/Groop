const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserLinkedSchema = new Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
)

const UserLinked = mongoose.model('UserLinked', UserLinkedSchema)
module.exports = { UserLinked }