const mongoose = require('mongoose')
require("dotenv").config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB.`)
    } catch (err) {
        console.log(
          `Error connecting to MongoDB user account authentication will fail: ${err}`
        )
    }
}

module.exports = connectDB