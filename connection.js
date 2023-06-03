let mongoose = require('mongoose')
let dotenv = require('dotenv')
dotenv.config()
let connection = mongoose.connect(process.env.MONGO_URI)
module.exports = connection;