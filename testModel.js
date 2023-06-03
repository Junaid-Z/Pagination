const { default: mongoose } = require("mongoose");

let testSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

let testModel = mongoose.model('test', testSchema)
module.exports = testModel;